import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.LoginParams) => {
	return http.post<Login.LoginAPI>(PORT1 + `/web/v1.0/user/login-by-name-passwd`, params);
};
