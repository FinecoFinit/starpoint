import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { generateViewerId, getServerTime } from "../../utils";
import { deleteAccountSessionsOfType, generateViewerIdSession, getSession, insertDefaultPlayerSync, insertSession, insertSessionWithToken } from "../../data/wdfpData";
import { SessionType } from "../../data/types";
import { serializePlayerData } from "../../data/utils";

interface GetHeaderResponseBody {
    viewer_id: number
}

interface SignupBody {
    app_secret: string
    access_token: string
    storage_directory_path: string
    app_admin: string
    kakao_pkd: string,
    device_id: number,
    idp_code: string
}

const routes = async (fastify: FastifyInstance) => {
    fastify.post("/get_header_response", (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as GetHeaderResponseBody

        reply.header("content-type", "application/x-msgpack")

        reply.status(200).send({
            "data_headers": {
                "force_update": false,
                "asset_update": false,
                "short_udid": null,
                "viewer_id": body.viewer_id,
                "servertime": getServerTime(),
                "result_code": 1
            },
            "data": []
        })
    })

    fastify.post("/signup", async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as SignupBody
        
        const zat = body.access_token
        if (!zat) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid request body."
        })

        const udid = request.headers['udid']
        if (!udid) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid headers."
        })

        const session = await getSession(zat)
        if (session === null || session.type !== SessionType.ZAT) return reply.status(400).send({
            "error": "Bad Request",
            "message": "Invalid zat provided."
        })

        const accountId = session.accountId

        // create new player account
        insertDefaultPlayerSync(accountId)

        // generate viewer id
        const viewerId = await generateViewerIdSession(accountId)

        reply.header("content-type", "application/x-msgpack")
        reply.status(200).send({
            "data_headers": {
                "short_udid": 0,
                "viewer_id": Number.parseInt(viewerId.token),
                "udid": udid,
                "servertime": getServerTime(),
                "result_code": 1
            },
            "data": []
        })
    })
}

export default routes;