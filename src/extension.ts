/*

版权所有（c）2022 dsy4567（https://github.com/dsy4567/ ; dsy4567@outlook.com）

反996许可证版本1.0

在符合下列条件的情况下，特此免费向任何得到本授权作品的副本（包括源代码、文件和/或相关内容，以
下统称为“授权作品”）的个人和法人实体授权：被授权个人或法人实体有权以任何目的处置授权作品，包括
但不限于使用、复制，修改，衍生利用、散布，发布和再许可：

1. 个人或法人实体必须在许可作品的每个再散布或衍生副本上包含以上版权声明和本许可证，不得自行修
改。
2. 个人或法人实体必须严格遵守与个人实际所在地或个人出生地或归化地、或法人实体注册地或经营地（
以较严格者为准）的司法管辖区所有适用的与劳动和就业相关法律、法规、规则和标准。如果该司法管辖区
没有此类法律、法规、规章和标准或其法律、法规、规章和标准不可执行，则个人或法人实体必须遵守国际
劳工标准的核心公约。
3. 个人或法人不得以任何方式诱导、暗示或强迫其全职或兼职员工或其独立承包人以口头或书面形式同意
直接或间接限制、削弱或放弃其所拥有的，受相关与劳动和就业有关的法律、法规、规则和标准保护的权利
或补救措施，无论该等书面或口头协议是否被该司法管辖区的法律所承认，该等个人或法人实体也不得以任
何方法限制其雇员或独立承包人向版权持有人或监督许可证合规情况的有关当局报告或投诉上述违反许可证
的行为的权利。

该授权作品是"按原样"提供，不做任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵
权性的保证。在任何情况下，无论是在合同诉讼、侵权诉讼或其他诉讼中，版权持有人均不承担因本软件或
本软件的使用或其他交易而产生、引起或与之相关的任何索赔、损害或其他责任。

----------

“死妈的防沉迷”许可证　第一版（草案）

版权所有　（c）　2022　dsy4567（https://github.com/dsy4567/ ; dsy4567@outlook.com）

简介

　　《“死妈的防沉迷”许可证》是一份面向软件及其他类型作品的版权许可协议，它旨在制约制定、实施
或遵守防沉迷通知以及为上述行为提供条件或便利的个人或法人实体的发展，并强迫这些个人或法人实体权
衡自身行为。

　　下文是有关使用、复制、修改、衍生利用、散布、发布和再许可的严谨描述和实施条件。

〇、定义

　　“本许可证”指《“死妈的防沉迷”许可证　第一版（草案）》；
　　“本作品”指任何在本许可证保护下的有版权的作品（包括源代码、文件和/或相关内容）；
　　“版权持有人”可以是个人或法人实体；
　　“您”指接收本作品的副本的个人或法人实体；
　　“防沉迷通知”指《国家新闻出版署关于进一步严格管理　切实防止未成年人沉迷网络游戏的通知》（国
新出发〔2021〕14号）；<https://www.nppa.gov.cn/nppa/contents/279/98792.shtml>
　　“举报平台”指国家新闻出版署防止未成年人沉迷网络游戏举报平台；
<https://jubao.chinaso.com/>
　　“实名认证系统”指网络游戏防沉迷实名认证系统。
<https://wlc.nppa.gov.cn/fcm_company/index.html>

一、本作品的处置

　　在符合本许可证的条件的情况下，无论是出于商业目的还是非商业目的，您有权以任何方式处置本作品
（包括但不限于使用、复制、修改、衍生利用、散布、发布和再许可），且不必事先取得版权持有人的同意。

二、版权声明

　　您必须在授权作品的每个再散布或衍生副本上包含以上版权声明和本许可证，不得自行修改。

三、您的行为的限制

　　您只有满足以下条件后，才能够使用、复制、修改、衍生利用、散布、发布或再许可本作品的副本：
　　您未遵守或实施防沉迷通知内的任何要求，且未参与或组织防沉迷通知的编写、制定或修订活动；
　　您未为举报平台和实名认证系统及其衍生副本的制作、使用、复制、修改、衍生利用、散布、发布和正
常运营提供条件或便利，或制作、使用、复制、修改、衍生利用、散布或发布举报平台或实名认证系统及其
衍生副本，且未组织或参与举报平台或实名认证系统的运营或维护活动；
　　您未与不满足第三条条件的其他个人或法人实体有隶属、投资或被投资关系。

四、终止授权

　　自您违反本许可证之日起，您将失去使用、复制、修改、衍生利用、散布、发布或再许可本作品的权利
，直到版权持有人明确恢复对您的授权。

五、品质担保和免责声明

　　在适用的法律范围内，除非另有书面说明，否则版权持有人不对本作品的品质作任何担保，如果本作品
的缺陷（例如程序的质量和性能问题）引发了任何程度的损失和后果（例如数据丢失或损坏、无法与其他程
序协同工作），那么版权持有人不为此承担任何责任，即使他（们）声称本作品没有任何缺陷，且您需要自
行承担为此花费的修复费用或其他必要费用以及损失和责任。

　　条款和条件结束。
*/

"use strict";
import * as vscode from "vscode";
import * as cheerio from "cheerio";
import axios, { AxiosRequestConfig, ResponseType } from "axios";
import * as iconv from "iconv-lite";
import * as http from "http";
import * as cookie from "cookie";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as mime from "mime";

interface History {
    date: string;
    webGame: boolean;
    name: string;
    url: string;
}
interface GlobalStorage {
    get(key: "history"): History[];
    get(key: "cookie" | "kwd" | "kwd-forums"): string;
    get(key: "id1" | "id2"): number | string;

    set(key: "history", value: History[]): Thenable<void>;
    set(key: "cookie" | "kwd" | "kwd-forums", value: string): Thenable<void>;
    set(key: "id1" | "id2", value: number | string): Thenable<void>;
}

let COOKIE: string;
/** 游戏入口文件 */
let DATA: Buffer | string;
let HTTP_SERVER: http.Server | undefined;
let PORT = 44399;
/** 覆盖用户设置的 referer, 仅用于本地服务器(推荐使用 @link{initHttpServer}) */
let REF: string | undefined;

/** e.g. szhong.4399.com */
let server = "";
/** e.g. /4399swf/upload_swf/ftp39/cwb/20220706/01a/index.html */
let gamePath = "";
/** e.g. http://szhong.4399.com/4399swf/upload_swf/ftp39/cwb/20220706/01a/index.html */
let gameUrl = "";
/** e.g. {"原始人部落": "http://www.4399.com/flash/230924.htm"} */
let gameInfoUrls: Record<string, string> = {};

let alerted = false; // 第一次游戏前提示
/** Webview 面板 */
let panel: vscode.WebviewPanel;
/** 扩展上下文 */
let context: vscode.ExtensionContext;
/** 加载提示状态栏项 */
let statusBarItem: vscode.StatusBarItem = vscode.window.createStatusBarItem(1);

// 群组相关
let threadQp: vscode.QuickPick<vscode.QuickPickItem>;
let threadQpItems: vscode.QuickPickItem[] = [];
/** 已输入的搜索词 */
let threadSearchValue: string;
/** 页码 */
let threadPage: number;
/** e.g. threadData[0] == ["造梦无双", 84526] */
let threadData: [string, number][];
/** e.g. threads["造梦无双"] == 84526 */
let threads: Record<string, number> = {};
/** 延迟获取搜索建议 */
let threadTimeout: NodeJS.Timeout;

// 搜索相关
let searchQp: vscode.QuickPick<vscode.QuickPickItem>;
let searchQpItems: vscode.QuickPickItem[] = [];
/** 已输入的搜索词 */
let searchValue: string;
/** 页码 */
let searchPage: number;
/** e.g. searchData[0] == ["造梦无双", 210650] */
let searchData: [string, number][];
/** e.g. searchedGames["造梦无双"] == 210650 */
let searchedGames: Record<string, number> = {};
/** 延迟获取搜索建议 */
let searchTimeout: NodeJS.Timeout;

/** e.g. "C:\users\you\.4ov-data\", "/home/you/.4ov-data/" */
const DATA_DIR = path.join(os.userInfo().homedir, ".4ov-data/");
/** 获取要注入的 HTML 代码片段 */
const getScript = (cookie: string = "", fullWebServerUri: vscode.Uri) => {
    let s: string = "",
        f = fs.readdirSync(path.join(DATA_DIR, "html-scripts/"));
    f.forEach(file => {
        if (
            file &&
            fs.statSync(path.join(DATA_DIR, "html-scripts/", file)).isFile()
        )
            try {
                s += fs
                    .readFileSync(path.join(DATA_DIR, "html-scripts/", file))
                    .toString();
            } catch (e) {
                err(
                    `读取 HTML 代码片段文件 ${path.join(
                        DATA_DIR,
                        "html-scripts/",
                        file
                    )} 时出错`,
                    e
                );
            }
    });

    return (
        `
<script>
const FULL_WEB_SERVER_URI = "${fullWebServerUri}";
// 强制设置 referrer
Object.defineProperty(document, "referrer", {
    value: "http://www.4399.com/",
    writable: true,
});
// 强制设置 cookie
Object.defineProperty(document, "cookie", {
    value: \`${cookie.replaceAll(";", "; ")}\`,
    writable: false,
});
// 设置 document.domain 不会报错
Object.defineProperty(document, "domain", {
    value: "4399.com",
    writable: true,
});
// 打开链接
Object.defineProperty(window, "open", {
    value: (url) => {
        console.log(url);
        fetch("/openUrl/" + url);
    },
    writable: true,
});
// 用户头像
setInterval(() => {
    document
        .querySelectorAll("img[src*='//a.img4399.com/']")
        ?.forEach((elem) => {
            if (!elem.src.includes("/proxy/")) {
                elem.src = "/proxy/" + elem.src;
            }
        });
}, 3000);
</script>
` + s
    );
};
const getWebviewHtml_h5 = (
    fullWebServerUri: vscode.Uri | string,
    cspSource: string,
    w: string | number = "100%",
    h: string | number = "100vh"
) => `
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>4399</title>
        <base target="_self" />
    </head>

    <body>
        <style>
            ::-webkit-scrollbar {
                display: none !important;
            }

            html, body {
                overflow: hidden;
                margin: 0;
                padding: 0;
            }


            iframe {
                width: ${typeof w === "string" ? w : w + "%"};
                height: ${
                    typeof h === "string" ? h.replace("%", "vh") : h + "vh"
                };
            }
        </style>
        <iframe id="ifr" src="" frameborder="0"></iframe>
        <script>
            const IFR_FULL_WEB_SERVER_URI = "${String(
                fullWebServerUri
            )}".replaceAll("%3D","=").replaceAll("%26","&")
            console.log(IFR_FULL_WEB_SERVER_URI);
            ifr.src = IFR_FULL_WEB_SERVER_URI;
        </script>
    </body>
</html>

`;
const getWebviewHtml_flash = (
    fullWebServerUri: vscode.Uri | string,
    cspSource: string,
    w: string | number = "100%",
    h: string | number = "100%"
) => `
<!DOCTYPE html>
<html style="height: 100%;margin: 0;padding: 0;">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>flash 播放器(Ruffle 引擎)</title>
        <style>
            ::-webkit-scrollbar {
                display: none !important;
            }

            html, body {
                overflow: hidden;
                margin: 0;
                padding: 0;
            }
        </style>
        <script>
            try{ var vscode = acquireVsCodeApi(); } catch (e) {}
            // 打开链接
            Object.defineProperty(window, "open", {
                value: (url) => {
                    console.log(url);
                    vscode.postMessage({ open: new URL(url, location.href).href })
                },
                writable: true,
            });
        </script>
        <script>
            window.play = function (url) {
                var html =
                    '<object id="flashgame" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="100%" height="100%"><param id="game" name="movie" value="' +
                    url +
                    '" /><embed id="flashgame1" name="flashgame" src="' +
                    url +
                    '" quality="high" pluginspage="//www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="${
                        typeof w === "string" ? w : w + "%"
                    }" height="${
    typeof h === "string" ? h : h + "%"
}" /> <param name="quality" value="high" /></object>';
                document.body.innerHTML =html
            };
        </script>
        <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
    </head>
    <body style="height: 100%;margin: 0;padding: 0;">
        <script>
            const IFR_FULL_WEB_SERVER_URI = "${String(
                fullWebServerUri
            )}".replaceAll("%3D","=").replaceAll("%26","&")
            console.log(IFR_FULL_WEB_SERVER_URI);
            window.play(IFR_FULL_WEB_SERVER_URI);
        </script>
    </body>
</html>
`;
/**
 * 全局存储
 * @param context 扩展上下文
 */
const globalStorage = (context: vscode.ExtensionContext): GlobalStorage => {
    return {
        get: (key: string) => JSON.parse(context.globalState.get(key) || '""'),
        set: (key: string, value: any) =>
            context.globalState.update(key, JSON.stringify(value)),
    };
};
/**
 * 启动本地服务器, 包含本地服务器运行时的相关代码
 * @param callback 服务器启动后要执行的回调
 * @param ref 覆盖用户设置的 referer
 */
function initHttpServer(callback: Function, ref?: string) {
    REF = ref;
    let onRequest: http.RequestListener = (request, response) => {
        function log(...p: any) {} // NOTE: 在需要输出网络请求相关日志时需要注释掉这行代码

        log(request.url, request);
        try {
            if (!request?.url) response.end(null);
            else if (request.url === "/") {
                log("访问根目录直接跳转到游戏入口页面");
                gamePath !== "/"
                    ? response.writeHead(302, {
                          Location: gamePath,
                      })
                    : response.writeHead(500, {}); // 防止重复重定向
                response.end();
            } else if (request.url.startsWith("/proxy/")) {
                log("代理请求", REF);
                let u = request.url.substring("/proxy/".length);
                let h = new URL(u, "https://www.4399.com/").hostname;
                if (h === "127.0.0.1" || h === "localhost") u = "";

                if (u)
                    axios
                        .get(u, getReqCfg("arraybuffer", true, REF))
                        .then(res => {
                            let headers = res.headers;
                            response.writeHead(res.status, headers);
                            response.statusMessage = res.statusText;
                            response.end(res.data);
                        })
                        .catch(e => {
                            response.writeHead(500, {
                                "Content-Type": "text/plain",
                            });
                            response.statusMessage = e.message;
                            response.end(e.message);
                            if (
                                !String(e.message).includes(
                                    "Request failed with status code"
                                )
                            )
                                // 忽略 4xx, 5xx 错误
                                err("本地服务器出现错误: ", e.message);
                        });
                else response.end(null);
            } else if (
                request.url.startsWith("/openUrl/") &&
                getCfg("openUrl", true)
            ) {
                log("打开外链/推荐游戏");
                let u;
                try {
                    u = new URL(
                        request.url.substring("/openUrl/".length),
                        "https://www.4399.com/"
                    );
                } catch (e) {
                    openUrl(request.url.substring("/openUrl/".length));
                    response.writeHead(200);
                    response.end(null);
                    return;
                }

                if (
                    u.hostname.endsWith(".4399.com") &&
                    u.pathname.startsWith("/flash/")
                )
                    getPlayUrl(u.href);
                else if (
                    u.hostname === "sbai.4399.com" &&
                    u.searchParams.get("4399id")
                )
                    getPlayUrl(
                        "http://www.4399.com/flash/" +
                            u.searchParams.get("4399id") +
                            ".htm"
                    );
                else openUrl(request.url.substring("/openUrl/".length));

                response.writeHead(200);
                response.end(null);
            } else if (
                new URL(request.url, "http://localhost:" + PORT).pathname ===
                gamePath
            ) {
                log("访问游戏入口页面直接返回数据");
                let t = mime.getType(request.url || "");
                t = t || "text/html";
                response.writeHead(200, {
                    "content-security-policy":
                        "allow-pointer-lock allow-scripts",
                    "content-type": t + "; charset=utf-8",
                    "access-control-allow-origin": "*",
                });
                response.end(DATA);
            } else {
                log("向 4399 服务器请求游戏文件");
                axios
                    .get(
                        "http://" + server + request.url,
                        getReqCfg("arraybuffer", false, REF)
                    )
                    .then(res => {
                        let headers = res.headers;
                        headers["access-control-allow-origin"] = "*";
                        response.writeHead(res.status, headers);
                        response.statusMessage = res.statusText;
                        response.end(res.data);
                    })
                    .catch(e => {
                        log(request, request.url);
                        response.writeHead(500, {
                            "Content-Type": "text/plain",
                        });
                        response.statusMessage = e.message;
                        response.end(e.message);
                        if (
                            !String(e.message).includes(
                                "Request failed with status code"
                            )
                        )
                            // 忽略 4xx, 5xx 错误
                            err("本地服务器出现错误: ", e.message);
                    });
            }
        } catch (e) {
            response.writeHead(500, {
                "Content-Type": "text/plain",
            });
            response.end(String(e));
        }
    };

    if (HTTP_SERVER) callback();
    else {
        PORT = Number(getCfg("port", 44399));
        if (isNaN(PORT)) PORT = 44399;

        try {
            HTTP_SERVER = http
                .createServer(onRequest)
                .listen(PORT, "localhost", function () {
                    log("本地服务器已启动");
                    callback();
                })
                .on("error", e => {
                    err(
                        "本地服务器启动时出错(第一次出现端口占用问题请忽略): ",
                        e.stack
                    );
                    PORT += 1; // 端口第一次被占用时自动 +1
                    HTTP_SERVER = http
                        .createServer(onRequest)
                        .listen(PORT, "localhost", function () {
                            log("本地服务器已启动");
                            callback();
                        })
                        .on("error", e => {
                            err(e.stack);
                            HTTP_SERVER = undefined;
                        });
                });
        } catch (e) {
            err(String(e));
            HTTP_SERVER = undefined;
        }
    }
}
/**
 * 获取发起请求时的配置
 * @param responseType 响应类型
 * @param noCookie 是否带上 cookie
 * @param ref referer
 * @returns Axios 请求配置
 */
function getReqCfg(
    responseType?: ResponseType,
    noCookie: boolean = false,
    ref?: string
): AxiosRequestConfig<any> {
    let c;
    if (!noCookie) c = getCookieSync();

    return {
        baseURL: "http://www.4399.com",
        responseType: responseType,
        headers: {
            "user-agent": getCfg("user-agent"),
            referer: ref || getCfg("referer"),
            cookie: c && !noCookie ? c : "",
        },
    };
}
/**
 * 打开链接
 * @param url 链接
 */
function openUrl(url: string) {
    if (!url) return;

    let u = new URL(url, "https://www.4399.com/").href;
    vscode.env.openExternal(vscode.Uri.parse(u));
}
/** 输出日志, 受用户配置影响(推荐优先使用) */
function log(...arg: any) {
    if (!getCfg("printLogs")) return;

    console.log("[4399 on VSCode]", ...arg);
}
/** 报错并提示用户(仅在用户必须知情时使用) */
function err(...arg: any) {
    vscode.window
        .showErrorMessage(
            [...arg].join(" "),
            "切换开发人员工具(Ctrl+Shift+I)",
            "在 GitHub 上报告问题"
        )
        .then(val => {
            if (val === "在 GitHub 上报告问题")
                openUrl("https://github.com/dsy4567/4399-on-vscode/issues");
            else if (val === "切换开发人员工具(Ctrl+Shift+I)")
                vscode.commands.executeCommand(
                    "workbench.action.webview.openDeveloperTools"
                );
        });
    console.error("[4399 on VSCode]", ...arg);
    loaded(true);
}
/**
 * 游戏开始/完成加载时调用
 * @param hide 游戏是否已加载完毕
 */
function loaded(hide: boolean) {
    if (!statusBarItem.name)
        statusBarItem.text = "$(loading~spin) " + "游戏加载中";

    hide ? statusBarItem.hide() : statusBarItem.show();
}
function createQuickPick(o: {
    value?: string;
    title?: string;
    prompt?: string;
}): Promise<vscode.QuickPick<vscode.QuickPickItem>> {
    return new Promise((resolve, reject) => {
        let qp = vscode.window.createQuickPick();
        qp.title = o.title;
        qp.value = o.value || "";
        qp.placeholder = o.prompt;
        qp.canSelectMany = false;
        qp.matchOnDescription = true;
        qp.matchOnDetail = true;
        qp.ignoreFocusOut = true;
        resolve(qp);
    });
}
/**
 * 获取工作区配置
 * @param name 去掉 "4399-on-vscode." 后的配置 id
 * @param defaultValue 找不到配置时的返回值
 */
function getCfg(
    name:
        | "user-agent"
        | "referer"
        | "port"
        | "printLogs"
        | "title"
        | "injectionScripts"
        | "showIcon"
        | "openUrl"
        | "updateHistory"
        | "background"
        | "alert"
        | "use-credential-manager",
    defaultValue: any = undefined
): any {
    return vscode.workspace
        .getConfiguration()
        .get("4399-on-vscode." + name, defaultValue);
}
/**
 * 更改工作区配置
 * @param name 去掉 "4399-on-vscode." 后的配置 id
 * @param val 更改后的配置值
 */
function setCfg(name: string, val: any) {
    return vscode.workspace
        .getConfiguration()
        .update("4399-on-vscode." + name, val, true);
}
/**
 * 获取存放小游戏的服务器
 */
async function getServer(server_matched: RegExpMatchArray): Promise<string> {
    try {
        let res = await axios.get(
            "http://www.4399.com" + server_matched[0].split('"')[1],
            getReqCfg("text", true)
        );
        if (res.data) {
            log("成功获取到定义游戏服务器的脚本");
            return (res.data as string).split('"')[1].split("/")[2];
        } else
            throw new Error(
                "无法获取定义游戏服务器的脚本: 响应文本为空, 您可能需要配置 UA 或登录账号"
            );
    } catch (e) {
        console.error(e);
        return (
            server_matched[0]
                .split('"')[1]
                .replace("/js/server", "")
                .replace(".js", "") + ".4399.com"
        );
    }
}
/**
 * 获取 h5 页游的真实地址
 * @param urlOrId 游戏详情页链接或游戏 id(字符串)
 */
function getPlayUrlForWebGames(urlOrId: string) {
    login(async (c: string) => {
        loaded(false);

        let gameId = parseId(urlOrId);
        if (!gameId || isNaN(gameId)) return err("h5 页游链接格式不正确");

        try {
            let cookieValue = cookie.parse(c)["Pauth"];
            if (!cookieValue) return err("cookie 没有 Pauth 的值");

            let data: {
                data?: {
                    game?: {
                        mainId: number;
                        gameName: string;
                        gameUrl?: string;
                    };
                };
            } = (
                await axios.post(
                    "https://h.api.4399.com/intermodal/user/grant2",
                    "gameId=" +
                        gameId +
                        "&authType=cookie&cookieValue=" +
                        cookieValue,
                    getReqCfg("json")
                )
            ).data;
            if (
                data.data?.game?.gameUrl &&
                data.data.game.gameUrl !== "&addiction=0"
            ) {
                log(data);
                let url = "https://www.zxwyouxi.com/g/" + gameId;
                let title = decodeURI(data.data.game.gameName);
                title = title || url;
                try {
                    gameInfoUrls[title] =
                        "http://www.4399.com/flash/" +
                        data.data.game.mainId +
                        ".htm";
                } catch (e) {}
                try {
                    let D = new Date();
                    updateHistory({
                        date: ` (${D.getFullYear()}年${
                            D.getMonth() + 1
                        }月${D.getDate()}日${D.getHours()}时${D.getMinutes()}分)`,
                        name: title,
                        webGame: true,
                        url: url,
                    });
                } catch (e) {
                    err("写入历史记录失败", String(e));
                }

                showWebviewPanel(data.data.game.gameUrl, title, "", false);
            } else err("无法登录游戏, 或者根本没有这个游戏");
        } catch (e) {
            err("无法获取游戏页面", String(e));
        }
    });
}
/**
 * 获取普通小游戏的真实地址
 * @param url 游戏详情页链接
 */
async function getPlayUrl(url: string) {
    if (url.startsWith("//")) url = "http:" + url;
    else if (url.startsWith("/")) url = "http://www.4399.com" + url;

    try {
        loaded(false);
        let res = await axios.get(url, getReqCfg("arraybuffer"));

        if (res.data) {
            res.data = iconv.decode(res.data, "gb2312");
            log("成功获取到游戏页面");
            const $ = cheerio.load(res.data);
            const html = $.html();
            if (!html)
                return err(
                    "无法获取游戏页面: html 为空, 您可能需要配置 UA 或登录账号(错误发生在获取游戏详情页阶段)"
                );

            let title: string | null = "";
            let m: RegExpMatchArray | null = null;

            m = html.match(/<title>.+<\/title>/i);
            if (!m) title = $("title").html();
            else
                try {
                    title = m[0]
                        .replace(/<\/?title>/gi, "")
                        .split(/[-_ |，,¦]/gi)[0]
                        .replaceAll(/[\n ]/gi, "");
                } catch (e) {
                    title = $("title").html();
                    err("无法匹配游戏标题:", e);
                }

            let server_matched = html
                .replaceAll(" ", "")
                .match(/src\=\"\/js\/(server|s[0-9]).*\.js\"/i);
            let gamePath_matched = html.match(
                /\_strGamePath\=\".+\.(swf|htm[l]?)(\?.+)?\"/i
            );
            title = title || url;
            if (
                $("title").text().includes("您访问的页面不存在！") &&
                res.status
            ) {
                delete gameInfoUrls[title];
                return err("无法获取游戏信息: 游戏可能因为某些原因被删除");
            }
            gameInfoUrls[title] = url;
            if (!server_matched || !gamePath_matched) {
                // 游戏可能是 h5 页游
                let u1 = $("iframe#flash22").attr("src");
                let u2 = $("a.start-btn").attr("href");
                if (u1) return getPlayUrlForWebGames(u1);

                if (u2) return getPlayUrlForWebGames(u2);

                delete gameInfoUrls[title];
                err(
                    "正则匹配结果为空, 此扩展可能出现了问题, 也可能因为这个游戏类型不受支持, 已自动为您跳转至游戏详情页面"
                );
                return showWebviewPanel(url, title);
            }
            gamePath =
                "/4399swf" +
                (gamePath_matched as RegExpMatchArray)[0]
                    .replaceAll(" ", "")
                    .replace("_strGamePath=", "")
                    .replace(/["]/g, "");
            if (gamePath.includes("gameId="))
                try {
                    let u = new URL(gamePath, "http://www.4399.com/");
                    let i = u.searchParams.get("gameId");
                    if (i && !isNaN(Number(i))) return getPlayUrlForWebGames(i);
                } catch (e) {}

            try {
                let D = new Date();
                updateHistory({
                    date: ` (${D.getFullYear()}年${
                        D.getMonth() + 1
                    }月${D.getDate()}日${D.getHours()}时${D.getMinutes()}分)`,
                    name: title,
                    webGame: false,
                    url: url,
                });
            } catch (e) {
                err("写入历史记录失败", String(e));
            }

            let s = await getServer(server_matched);
            log("服务器", s);
            let isFlashPage = false;

            // 简单地判断域名是否有效
            if (s === "127.0.0.1" || s === "localhost" || /[/:?#\\=&]/g.test(s))
                return err("游戏服务器域名 " + s + " 非法");

            if (
                !s.endsWith(".4399.com") &&
                s !== "4399.com" &&
                (await vscode.window.showWarningMessage(
                    "游戏服务器域名 " +
                        s +
                        " 不以 4399.com 结尾, 是否仍要开始游戏",
                    "是",
                    "否"
                )) !== "是"
            )
                return;

            server = s;
            gameUrl = "http://" + s + gamePath;

            if (gameUrl) {
                if (
                    !$(
                        "#skinbody > div:nth-child(7) > div.fl-box > div.intr.cf > div.eqwrap"
                    )[0] &&
                    !gamePath.includes(".swf")
                )
                    isFlashPage = true;

                try {
                    res = await axios.get(gameUrl, getReqCfg("arraybuffer"));

                    if (!res.data)
                        return err(
                            "无法获取游戏页面: html 为空, 您可能需要配置 UA 或登录账号 (错误发生在处理游戏真实页面阶段)"
                        );

                    if (
                        isFlashPage &&
                        res.headers["content-type"]
                            .toLocaleLowerCase()
                            .includes("html")
                    ) {
                        let m = (
                            iconv.decode(res.data, "gb2312") as string
                        ).match(/<embed.+src=".+.swf/i);

                        if (m) {
                            let fileName = m[0].split('"').at(-1) as string;
                            if (fileName.includes("gameloader.swf")) {
                                m = fileName.match(/gameswf=.+.swf/);
                                if (m)
                                    fileName = m[0].split("=").at(-1) as string;
                            }
                            gameUrl = gameUrl.replace(
                                gameUrl.split("/").at(-1) as string,
                                fileName
                            );
                            let u = new URL(gameUrl);
                            gamePath = u.pathname;
                            res.data = (
                                await axios.get(
                                    gameUrl,
                                    getReqCfg("arraybuffer")
                                )
                            ).data;
                        }
                    }
                    if (res.data) {
                        log("成功获取到游戏真实页面", gameUrl);

                        initHttpServer(() => {
                            DATA = res.data;
                            let u = new URL(gamePath, "http://localhost/");
                            u.port = String(PORT);
                            title = title || url;
                            showWebviewPanel(
                                u.toString(),
                                title,
                                gamePath.includes(".swf") && "fl",
                                true
                            );
                        });
                    }
                } catch (e) {
                    err("无法获取游戏真实页面: ", e);
                }
            } else return err("游戏真实地址为空");
        } else {
            err("无法获取游戏页面: 响应文本为空, 您可能需要配置 UA 或登录账号");
            log(res);
        }
    } catch (e) {
        err("无法获取游戏页面: ", e);
    }
}
/**
 * 搜索游戏
 * @param s 默认搜索词
 */
async function searchGames(s: string) {
    if (searchQp) searchQp.show();

    // let data: [string, number][];
    // let items: vscode.QuickPickItem[] = [];
    // let games: Record<string, number> = {};
    // let timeout: NodeJS.Timeout;
    // let pageNum = 1;

    searchQp = await createQuickPick({
        value: String(s) || "",
        title: "4399 on VSCode: 搜索",
        prompt: "输入搜索词",
    });

    const search = (s: string) => {
        searchQp.title = s + " 的搜索结果";
        searchQp.busy = true;
        log("页码 " + searchPage);
        axios
            .get(
                "https://so2.4399.com/search/search.php?k=" +
                    encodeURI(s) +
                    "&p=" +
                    searchPage,
                getReqCfg("arraybuffer")
            )
            .then(res => {
                if (res.data) {
                    res.data = iconv.decode(res.data, "gb2312");
                    log("成功获取到4399搜索页面");
                    const $ = cheerio.load(res.data);
                    searchedGames = {};
                    searchData = [];
                    searchQpItems = [];

                    $(
                        "#skinbody > div.w_980.cf > div.anim > div > div > div.pop > b > a"
                    ).each((i, elem) => {
                        let h = $(elem).html();
                        let u = $(elem).attr("href");
                        if (!h || !u) return;

                        let id = Number(u.split(/[/.]/gi).at(-2));
                        let n = h
                            .replace(/<font color=['"]?red['"]?>/, "")
                            .replace("</font>", "");
                        if (!id || isNaN(id) || !n) return;

                        searchData.push([n, id]);
                        searchedGames[n] = id;
                    });

                    searchData.forEach(g => {
                        searchQpItems.push({
                            label: g[0],
                            description: "游戏 id: " + g[1],
                            alwaysShow: true,
                        });
                    });
                    searchQpItems.push({
                        label: "下一页",
                        description: "加载下一页内容",
                        alwaysShow: true,
                    });
                    searchQp.items = searchQpItems;
                    searchQp.busy = false;
                }
            })
            .catch(e => {
                err("无法获取4399首页: ", e);
            });
    };
    searchQp.onDidChangeValue(kwd => {
        if (kwd === searchValue) return (searchQp.items = searchQpItems);

        searchValue = kwd;
        searchQp.title = "4399 on VSCode: 搜索";

        searchPage = 1;
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQp.busy = true;
            axios
                .get(
                    "https://so2.4399.com/search/lx.php?k=" + encodeURI(kwd),
                    getReqCfg("arraybuffer")
                )
                .then(res => {
                    if (!res.data) return err("获取搜索建议失败");

                    res.data = iconv.decode(res.data, "gb2312");
                    let d: string = res.data;
                    log(d);

                    let m = d.split(" =")[1];
                    searchedGames = {};
                    searchData = [];
                    searchQpItems = [];

                    try {
                        if (!m) throw new Error("");

                        searchData = JSON.parse(m.replaceAll("'", '"'));
                    } catch (e) {
                        return err("解析搜索建议失败");
                    }

                    searchQpItems.push({
                        label: searchQp.value,
                        description: "直接搜索",
                        alwaysShow: true,
                    });
                    searchData.forEach(g => {
                        searchQpItems.push({
                            label: g[0],
                            description: "游戏 id: " + g[1],
                            alwaysShow: true,
                        });
                        searchedGames[g[0]] = g[1];
                    });

                    if (searchQpItems[0]) searchQp.items = searchQpItems;

                    searchQp.busy = false;
                })
                .catch(e => {
                    return err("获取搜索建议失败", String(e));
                });
        }, 1000);
    });
    searchQp.onDidAccept(() => {
        if (searchQp.activeItems[0].description === "直接搜索")
            search(searchQp.value);
        else if (searchQp.activeItems[0].label === "下一页") {
            searchPage++;
            search(searchQp.value);
        } else {
            getPlayUrl(
                `http://www.4399.com/flash/${
                    searchedGames[searchQp.activeItems[0].label]
                }.htm`
            );
            searchQp.hide();
            globalStorage(context).set("kwd", searchQp.value);
        }
    });
    searchQp.show();
}
/**
 * 显示游戏详细信息
 * @param url 游戏详情页链接(可选, 留空则显示已打开的游戏)
 */
async function showGameInfo(url?: string) {
    let u = Object.keys(gameInfoUrls);

    if (url) {
    } else if (u.length === 1) url = gameInfoUrls[u[0]];
    else if (u[1]) {
        let n = await vscode.window.showQuickPick(u);
        url = gameInfoUrls[n || ""];
    }

    if (!url) return;

    try {
        if (url.startsWith("//")) url = "http:" + url;
        else if (url.startsWith("/")) url = "http://www.4399.com" + url;

        const html = iconv.decode(
            (await axios.get(url, getReqCfg("arraybuffer"))).data,
            "gb2312"
        );
        if (!html)
            return err(
                "无法获取游戏页面: html 为空, 您可能需要配置 UA 或登录账号(错误发生在获取游戏详情页阶段)"
            );

        const $ = cheerio.load(html);
        const desc1 = $("#introduce > font").text().replaceAll(/[\n ]/gi, "");
        const desc2 = $(
            "body > div.waper > div.content > div > div.box1.cf > div.intro.fl > div"
        )
            .text()
            .replaceAll(/[\n ]/gi, "");
        const desc3 = $(
            "body > div.main > div.w3.mb10 > div > div.bd_bg > div > div.w3_con1.cf > div.fl.con_l > div.cf.con_l1 > div.m11.fl > p"
        )
            .text()
            .replaceAll(/[\n ]/gi, "");
        const desc4 = $("#cont").text().replaceAll(/[\n ]/gi, "");
        let desc = desc1 || desc2 || desc3 || desc4 || "未知";
        let title = $("title")
            .text()
            .split(/[-_ |，,¦]/gi)[0]
            .replaceAll(/[\n ]/gi, "");
        let gameId = String(parseId(url));
        title = title || "未知";
        gameId = (isNaN(Number(gameId)) ? "未知" : gameId) || "未知";
        vscode.window
            .showQuickPick([
                "🎮 游戏名: " + title,
                "📜 简介: " + desc,
                "🆔 游戏 id: " + gameId,
                "ℹ️ " + $("div.cls").text(),
                "❤️ 添加到收藏盒",
                "🌏 在浏览器中打开详情页面",
                "💬 热门评论",
            ])
            .then(async item => {
                if (item)
                    try {
                        if (item.includes("添加到收藏盒"))
                            login(async () => {
                                try {
                                    await axios.get(
                                        "https://gprp.4399.com/cg/add_collection.php?gid=" +
                                            gameId,
                                        getReqCfg("json")
                                    );
                                    vscode.window.showInformationMessage(
                                        "添加到收藏盒成功"
                                    );
                                } catch (e) {
                                    err("添加到收藏盒失败", String(e));
                                }
                            });
                        else if (item.includes("在浏览器中打开详情页面"))
                            openUrl(url as string);
                        else if (item.includes("热门评论")) {
                            const html = iconv.decode(
                                (
                                    await axios.get(
                                        "https://cdn.comment.4399pk.com/nhot-" +
                                            gameId +
                                            "-1.htm",
                                        getReqCfg("arraybuffer")
                                    )
                                ).data,
                                "utf8"
                            );
                            if (!html)
                                return err(
                                    "无法获取游戏页面: html 为空, 您可能需要配置 UA 或登录账号(错误发生在获取游戏评论页阶段)"
                                );

                            const $ = cheerio.load(html);
                            let items: string[] = [],
                                tops: string[] = [];
                            $("#cntBox > div.zd > div.con").each((i, elem) => {
                                tops[i] = "[置顶评论] " + $(elem).text();
                            });
                            $(".lam .tex").each((i, elem) => {
                                items[i] = $(elem).text();
                            });
                            items.unshift(...tops);
                            vscode.window.showQuickPick(items).then(item => {
                                if (item)
                                    vscode.window.showInformationMessage(item);
                            });
                        } else vscode.window.showInformationMessage(item);
                    } catch (e) {
                        err("无法获取游戏页面", String(e));
                    }
            });
    } catch (e) {
        err("无法获取游戏页面", String(e));
    }
}
/**
 * 显示 Webview 面板
 * @param url 游戏链接
 * @param title 游戏标题
 * @param type 游戏类型(可留空, flash 游戏/其他)
 * @param hasIcon 显示游戏图标
 * @param asExternalUri 没用
 */
async function showWebviewPanel(
    url: string,
    title: string,
    type?: "fl" | false | "",
    hasIcon?: boolean,
    asExternalUri = true
) {
    // try {
    //     panel.dispose();
    // } catch (e) {}

    const customTitle = getCfg("title");
    panel = vscode.window.createWebviewPanel(
        "4399OnVscode",
        customTitle || title || "4399 on VSCode",
        vscode.ViewColumn.Active,
        {
            enableScripts: true,
            retainContextWhenHidden: getCfg("background", true),
            localResourceRoots: [],
        }
    );

    panel.onDidDispose(() => {
        delete gameInfoUrls[title];
    });

    // 打开外链
    panel.webview.onDidReceiveMessage(
        m => {
            log(m);
            if (m.open && getCfg("openUrl", true)) openUrl(m.open);
        },
        undefined,
        context.subscriptions
    );

    // 注入脚本
    if (type !== "fl" && getCfg("injectionScripts", true))
        try {
            if (url.endsWith(".html") || (url.endsWith(".htm") && DATA)) {
                const $ = cheerio.load(iconv.decode(DATA as Buffer, "utf8"));
                $("head").append(
                    getScript(
                        getCookieSync(),
                        await vscode.env.asExternalUri(
                            vscode.Uri.parse(`http://localhost:${PORT}`)
                        )
                    )
                );
                DATA = $.html();
            }
        } catch (e) {
            err("无法为游戏页面注入优化脚本", String(e));
        }

    type === "fl"
        ? (panel.webview.html = getWebviewHtml_flash(
              asExternalUri
                  ? await vscode.env.asExternalUri(vscode.Uri.parse(url))
                  : url,
              panel.webview.cspSource
          ))
        : (panel.webview.html = getWebviewHtml_h5(
              asExternalUri
                  ? await vscode.env.asExternalUri(vscode.Uri.parse(url))
                  : url,
              panel.webview.cspSource
          ));
    if (!alerted && getCfg("alert", true)) {
        alerted = true;
        vscode.window
            .showInformationMessage(
                "温馨提示: 请在使用快捷键前使游戏失去焦点",
                "不再提示"
            )
            .then(val => setCfg("alert", false));
    }

    // 获取游戏图标
    let iconPath: vscode.Uri | undefined;
    let setIcon = () => {
        if (iconPath)
            panel.iconPath = {
                light: iconPath,
                dark: iconPath,
            };
    };
    if (hasIcon && getCfg("showIcon", true) && title)
        try {
            let gameId = gameInfoUrls[title].split(/[/.]/gi).at(-2);
            if (gameId)
                if (
                    fs.existsSync(
                        path.join(DATA_DIR, `cache/icon/${gameId}.jpg`)
                    )
                ) {
                    iconPath = vscode.Uri.file(
                        path.join(DATA_DIR, `cache/icon/${gameId}.jpg`)
                    );
                    setIcon();
                } else
                    axios
                        .get(
                            `https://imga1.5054399.com/upload_pic/minilogo/${gameId}.jpg`,
                            getReqCfg("arraybuffer")
                        )
                        .then(res => {
                            if (res.data)
                                fs.writeFile(
                                    path.join(
                                        DATA_DIR,
                                        `cache/icon/${gameId}.jpg`
                                    ),
                                    res.data,
                                    e => {
                                        if (e) console.error(String(e));

                                        try {
                                            if (
                                                fs.existsSync(
                                                    path.join(
                                                        DATA_DIR,
                                                        `cache/icon/${gameId}.jpg`
                                                    )
                                                )
                                            ) {
                                                iconPath = vscode.Uri.file(
                                                    path.join(
                                                        DATA_DIR,
                                                        `cache/icon/${gameId}.jpg`
                                                    )
                                                );
                                                setIcon();
                                            }
                                        } catch (e) {
                                            console.error(String(e));
                                        }
                                    }
                                );
                        })
                        .catch(e => {
                            console.error(String(e));
                        });
        } catch (e) {
            console.error(String(e));
        }

    loaded(true);
}
/** 设置 cookie */
async function setCookie(c: string = ""): Promise<void> {
    COOKIE = c;
    return new Promise(async (resolve, reject) => {
        try {
            context.secrets.store("cookie", c);
            resolve();
        } catch (e) {
            err("无法设置 cookie", e);
            reject(e);
        }
    });
}
/** 获取 cookie */
async function getCookie(): Promise<string> {
    return new Promise(async (resolve, reject) => {
        try {
            resolve((COOKIE = (await context.secrets.get("cookie")) || ""));
        } catch (e) {
            err("无法获取 cookie", e);
            reject(e);
        }
    });
}
/** 即时获取 cookie */
function getCookieSync() {
    if (typeof COOKIE === "undefined") {
        getCookie();
        return "";
    }
    return COOKIE;
}
/**
 * 登录相关, 如未登录则要求用户登录, 然后执行回调, 否则直接执行回调
 * @param callback 回调, 参数为 cookie
 * @param loginOnly 直接展示登录框, 不在右下角显示提示
 */
function login(callback: (cookie: string) => void, loginOnly: boolean = false) {
    loaded(true);
    let c = getCookieSync();
    if (c) {
        if (loginOnly)
            return vscode.window
                .showInformationMessage("是否退出登录?", "是", "否")
                .then(async value => {
                    if (value === "是") {
                        await setCookie();
                        vscode.window.showInformationMessage("退出登录成功");
                    }
                });
        return callback(getCookieSync());
    } else {
        if (!loginOnly) vscode.window.showInformationMessage("请登录后继续");
        vscode.window
            .showQuickPick(["🆔 使用账号密码登录", "🍪 使用 cookie 登录"])
            .then(value => {
                if (value?.includes("使用 cookie 登录"))
                    vscode.window
                        .showInputBox({
                            title: "4399 on VSCode: 登录(使用 cookie)",
                            prompt: "请输入 cookie, 获取方法请见扩展详情页, 登录后, 您可以玩页游或者使用其它需要登录的功能",
                        })
                        .then(async c => {
                            if (c)
                                try {
                                    let parsedCookie = cookie.parse(c);
                                    if (!parsedCookie["Pauth"])
                                        return err(
                                            "登录失败, cookie 没有 Pauth 值"
                                        );

                                    c = encodeURI(c);
                                    await setCookie(c);

                                    let welcomeMsg = "";
                                    if (parsedCookie["Pnick"])
                                        welcomeMsg = `亲爱的 ${parsedCookie["Pnick"]}, 您已`;

                                    vscode.window.showInformationMessage(
                                        welcomeMsg +
                                            "登录成功, 请注意定期更新 cookie"
                                    );
                                    callback(c);
                                } catch (e) {
                                    return err("登录失败, 其它原因", String(e));
                                }
                        });
                else if (value?.includes("使用账号密码登录"))
                    vscode.window
                        .showInputBox({
                            title: "4399 on VSCode: 登录(使用账号密码)",
                            prompt: "请输入 4399 账号",
                        })
                        .then(user => {
                            if (user)
                                vscode.window
                                    .showInputBox({
                                        title: "4399 on VSCode: 登录(使用账号密码)",
                                        prompt: "请输入密码",
                                        password: true,
                                    })
                                    .then(async pwd => {
                                        if (pwd)
                                            try {
                                                const r = await axios.post(
                                                    "https://ptlogin.4399.com/ptlogin/login.do?v=1",
                                                    `username=${user}&password=${pwd}`,
                                                    getReqCfg(
                                                        "arraybuffer",
                                                        true
                                                    )
                                                );
                                                const html = iconv.decode(
                                                    r.data,
                                                    "utf8"
                                                );
                                                const $ = cheerio.load(html);
                                                const msg = $("#Msg");
                                                if (msg.text())
                                                    return err(
                                                        "登录失败, ",
                                                        msg
                                                            .text()
                                                            .replace(
                                                                /[\n\r\t ]/gi,
                                                                ""
                                                            )
                                                    );

                                                let c: string[] | undefined =
                                                    r.headers["set-cookie"];
                                                let cookies: any = [];

                                                // 合并多个 set-cookie
                                                if (c && c[0]) {
                                                    c.forEach(co => {
                                                        cookies.push(
                                                            cookie.parse(co)
                                                        );
                                                    });
                                                    cookies = Object.assign(
                                                        {},
                                                        ...cookies,
                                                        {
                                                            Path: "/",
                                                            Domain: "4399.com",
                                                        }
                                                    );
                                                    cookies =
                                                        objectToQuery(cookies);

                                                    let parsedCookie =
                                                        cookie.parse(cookies);
                                                    if (!parsedCookie["Pauth"])
                                                        return err(
                                                            "登录失败, cookie 没有 Pauth 值"
                                                        );

                                                    cookies =
                                                        encodeURI(cookies);
                                                    await setCookie(cookies);

                                                    let welcomeMsg = "";
                                                    if (parsedCookie["Pnick"])
                                                        welcomeMsg = `亲爱的 ${parsedCookie["Pnick"]}, 您已`;

                                                    vscode.window.showInformationMessage(
                                                        welcomeMsg +
                                                            "登录成功, 请注意定期重新登录"
                                                    );
                                                    callback(cookies);
                                                } else
                                                    return err(
                                                        "登录失败, 响应头没有 set-cookie"
                                                    );
                                            } catch (e) {
                                                return err(
                                                    "登录失败, 其它原因",
                                                    String(e)
                                                );
                                            }
                                    });
                        });
            });
    }
}
/** 更新历史记录 */
function updateHistory(history: History) {
    if (!getCfg("updateHistory", true)) return;

    let h: History[] = globalStorage(context).get("history");
    if (!h || (typeof h === "object" && !h[0])) h = [];

    h.unshift(history);
    globalStorage(context).set("history", h);
}
/** 对象转 query(Ctrl + C and Ctrl + V from CSDN) */
function objectToQuery(obj: any, prefix?: string) {
    if (typeof obj !== "object") return "";

    const attrs = Object.keys(obj);
    return attrs.reduce((query, attr, index) => {
        // 判断是否是第一层第一个循环
        if (index === 0 && !prefix) query += "";

        if (typeof obj[attr] === "object") {
            const subPrefix = prefix ? `${prefix}[${attr}]` : attr;
            query += objectToQuery(obj[attr], subPrefix);
        } else if (prefix) query += `${prefix}[${attr}]=${obj[attr]}`;
        else query += `${attr}=${obj[attr]}`;

        // 判断是否是第一层最后一个循环
        if (index !== attrs.length - 1) query += ";";

        return query;
    }, "");
}
/** 游戏详情页链接转游戏 id */
function parseId(url: string | number): number {
    if (!isNaN(Number(url))) return url as number;

    let u = new URL(url as string, "https://www.4399.com/");
    let id: string =
        u.searchParams.get("gameId") ||
        path.parse(u.pathname).name.split(/[\_\-\.\/]/g)[0];
    log(url, " -> ", id);
    return Number(id);
}

/** 入口 */
export function activate(ctx: vscode.ExtensionContext) {
    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.random", // 试试手气(有几率失败)
            () => {
                getPlayUrl(
                    "https://www.4399.com/flash/" +
                        String(Math.floor(Math.random() * 10000) + 200000) +
                        ".htm"
                );
            }
        )
    );

    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.get", // 输入游戏 id (链接以 http(s)://www.4399.com/flash/ 开头)
            () => {
                let i = globalStorage(ctx).get("id1");
                vscode.window
                    .showInputBox({
                        value: i ? String(i) : "222735",
                        title: "4399 on VSCode: 输入游戏 id",
                        prompt: "输入游戏链接或 http(s)://www.4399.com/flash/ 后面的数字(游戏 id)",
                    })
                    .then(id => {
                        if (id) {
                            log("用户输入 ", id);
                            globalStorage(ctx).set("id1", id);
                            getPlayUrl(
                                "https://www.4399.com/flash/" + id + ".htm"
                            );
                        }
                    });
            }
        )
    );

    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.get-h5-web-game", // 输入游戏 id (链接以 http(s)://www.zxwyouxi.com/g/ 开头)
            () => {
                let i = globalStorage(ctx).get("id2");
                vscode.window
                    .showInputBox({
                        value: i ? String(i) : "100060323",
                        title: "4399 on VSCode: 输入游戏 id",
                        prompt: "输入游戏链接或 http(s)://www.zxwyouxi.com/g/ 后面的数字(游戏 id)",
                    })
                    .then(id => {
                        if (id) {
                            log("用户输入 ", id);
                            globalStorage(ctx).set("id2", id);
                            getPlayUrlForWebGames(
                                "https://www.zxwyouxi.com/g/" + id
                            );
                        }
                    });
            }
        )
    );

    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.recommended", // 推荐
            () => {
                axios
                    .get("https://www.4399.com/", getReqCfg("arraybuffer"))
                    .then(res => {
                        if (res.data) {
                            res.data = iconv.decode(res.data, "gb2312");
                            log("成功获取到4399首页");
                            const $ = cheerio.load(res.data);
                            let gameNames: string[] | undefined[] = [],
                                urls: string[] | undefined[] = [];

                            $(
                                "#skinbody > div.middle_3.cf > div.box_c > div.tm_fun.h_3 > ul > li > a[href*='/flash/']"
                            ).each((i, elem) => {
                                urls[i] = $(elem).attr("href");
                            });
                            $(
                                "#skinbody > div.middle_3.cf > div.box_c > div.tm_fun.h_3 > ul > li > a[href*='/flash/'] > img"
                            ).each((i, elem) => {
                                gameNames[i] = $(elem).attr("alt");
                            });
                            if (!gameNames[0] || !urls[0])
                                return err("一个推荐的游戏也没有");

                            vscode.window
                                .showQuickPick(gameNames as string[])
                                .then(val => {
                                    log("用户输入:", val);
                                    if (!val) return;

                                    let index = gameNames.indexOf(val as never);
                                    log("游戏页面: ", urls[index]);
                                    if (index !== -1) {
                                        let url = urls[index];
                                        if (!url)
                                            return err(
                                                "变量 url 可能为 undefined"
                                            );

                                        getPlayUrl(url);
                                    } else log("用户似乎取消了操作");
                                });
                        }
                    })
                    .catch(e => {
                        err("无法获取4399首页: ", e);
                    });
            }
        )
    );

    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.search", // 搜索
            () => {
                let s = globalStorage(ctx).get("kwd"); // 上次搜索词

                searchGames(s);
            }
        )
    );

    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.my", // 我的
            () => {
                login(c => {
                    let Pnick = cookie.parse(c)["Pnick"] || "未知";
                    Pnick = Pnick === "0" ? "未知" : Pnick;
                    vscode.window
                        .showQuickPick([
                            "🆔 昵称: " + Pnick,
                            "❤️ 我的收藏盒",
                            "✨ 猜你喜欢",
                            "🕒 我玩过的",
                            "🖊 签到",
                            "🚪 退出登录",
                        ])
                        .then(async value => {
                            if (value) {
                                const getGames = async (
                                    url: string,
                                    index:
                                        | "recommends"
                                        | "games"
                                        | "played_gids" = "recommends"
                                ) => {
                                    try {
                                        let favorites: {
                                            games: number[];
                                            played_gids: { gid: number }[];
                                            recommends: { gid: number }[];
                                            game_infos: Record<
                                                number,
                                                { c_url: string; name: string }
                                            >;
                                        } = (
                                            await axios.get(
                                                url,
                                                getReqCfg("json")
                                            )
                                        ).data;
                                        let _favorites: Record<string, string> =
                                            {};
                                        let names: string[] = [];
                                        if (
                                            favorites &&
                                            favorites.game_infos &&
                                            favorites[index]
                                        ) {
                                            let info = favorites.game_infos;
                                            favorites[index].forEach(o => {
                                                let id: number =
                                                    typeof o === "number"
                                                        ? o
                                                        : o.gid;
                                                _favorites[info[id].name] =
                                                    info[id].c_url;
                                                names.push(info[id].name);
                                            });
                                            vscode.window
                                                .showQuickPick(names)
                                                .then(game => {
                                                    if (game)
                                                        getPlayUrl(
                                                            _favorites[game]
                                                        );
                                                });
                                        }
                                    } catch (e) {
                                        err("获取失败", String(e));
                                    }
                                };
                                if (value.includes("我的收藏"))
                                    getGames(
                                        "https://gprp.4399.com/cg/collections.php?page_size=999",
                                        "games"
                                    );
                                else if (value.includes("猜你喜欢"))
                                    getGames(
                                        "https://gprp.4399.com/cg/recommend_by_both.php?page_size=100",
                                        "recommends"
                                    );
                                else if (value.includes("我玩过的"))
                                    getGames(
                                        "https://gprp.4399.com/cg/get_gamehistory.php?page_size=100",
                                        "played_gids"
                                    );
                                else if (value.includes("签到"))
                                    try {
                                        let data: {
                                            code?: number;
                                            result?:
                                                | null
                                                | string
                                                | {
                                                      days?: number;
                                                      credit?: number;
                                                  };
                                            msg?: string;
                                        } = (
                                            await axios.get(
                                                "https://my.4399.com/plugins/sign/set-t-" +
                                                    new Date().getTime(),
                                                getReqCfg("json")
                                            )
                                        ).data;
                                        if (data.result === null)
                                            err(
                                                "签到失败, 其他错误: " +
                                                    data.msg
                                            );
                                        else if (
                                            typeof data.result === "string"
                                        )
                                            vscode.window.showInformationMessage(
                                                data.result
                                            );
                                        else if (
                                            typeof data.result === "object"
                                        )
                                            vscode.window.showInformationMessage(
                                                `签到成功, 您已连续签到${data.result.days}天`
                                            );
                                        else err("签到失败, 返回数据非法");
                                    } catch (e) {
                                        err("签到失败: ", String(e));
                                    }
                                else if (value.includes("退出登录"))
                                    login(() => {}, true);
                            }
                        });
                });
            }
        )
    );

    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.info", // 游戏详情
            async () => {
                showGameInfo();
            }
        )
    );

    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.history", // 历史记录
            () => {
                try {
                    let h: History[] = globalStorage(ctx).get("history");
                    if (!h || (typeof h === "object" && !h[0])) h = [];

                    h.unshift({
                        webGame: false,
                        name: "🧹 清空历史记录",
                        url: "",
                        date: "",
                    });

                    let quickPickList: string[] = [];
                    h.forEach(obj => {
                        quickPickList.push(obj.name + obj.date);
                    });
                    vscode.window
                        .showQuickPick(quickPickList)
                        .then(gameName => {
                            if (gameName === "🧹 清空历史记录")
                                return globalStorage(ctx).set("history", []);

                            if (gameName)
                                for (let index = 0; index < h.length; index++) {
                                    const item = h[index];
                                    if (item.name + item.date === gameName) {
                                        if (item.webGame)
                                            getPlayUrlForWebGames(item.url);
                                        else getPlayUrl(item.url);

                                        break;
                                    }
                                }
                        });
                } catch (e) {
                    err("无法读取历史记录", String(e));
                }
            }
        )
    );

    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.forums", // 逛群组
            () => {
                login(async () => {
                    try {
                        if (threadQp) threadQp.show();

                        // let threadData: [string, number][];
                        // let threadQpItems: vscode.QuickPickItem[] = [];
                        // let forums: Record<string, number> = {};
                        // let threadTimeout: NodeJS.Timeout;
                        // let threadPage = 1;

                        let k = globalStorage(ctx).get("kwd-forums"); // 上次搜索词

                        threadQp = await createQuickPick({
                            value: k || "",
                            title: "4399 on VSCode: 逛群组",
                            prompt: "搜索群组",
                        });

                        const getThreads = async (
                            id: number,
                            title: string
                        ) => {
                            threads = {};
                            threadData = [];
                            threadQpItems = [];
                            threadQp.busy = true;

                            log("帖子 id: " + id);
                            let d: Buffer = (
                                await axios.get(
                                    `https://my.4399.com/forums/mtag-${id}`,
                                    getReqCfg("arraybuffer")
                                )
                            ).data;

                            if (d) {
                                const $ = cheerio.load(d);
                                threads = {};
                                threadData = [];

                                // 获取标题和类型
                                $("div.listtitle > div.title").each(
                                    (i, elem) => {
                                        let $title =
                                            $(elem).children("a.thread_link");
                                        let id = Number(
                                            $title
                                                .attr("href")
                                                ?.split("-")
                                                .at(-1)
                                        );
                                        let gid = $(
                                            "div.toplink > a[href*='']"
                                        );
                                        let title = $title.text();
                                        let type = $(elem)
                                            .children("a.type")
                                            .text();
                                        if (!id || isNaN(id) || !title) return;

                                        type = type || "[顶] ";
                                        title = type + title;
                                        threadData.push([title, id]);
                                        threads[title] = id;
                                    }
                                );

                                threadData.forEach(g => {
                                    threadQpItems.push({
                                        label: g[0],
                                        description: "进入帖子",
                                        alwaysShow: true,
                                    });
                                    threads[g[0]] = g[1];
                                });
                                threadQpItems.push({
                                    label: "到底了",
                                    description: "只展示第一页内容",
                                    alwaysShow: true,
                                });

                                if (threadQpItems[0]) {
                                    threadQp.items = threadQpItems;
                                    threadQp.title = "群组: " + title;
                                }

                                threadQp.busy = false;
                            } else err("无法获取群组页面");
                        };
                        const search = (kwd: string) => {
                            clearTimeout(threadTimeout);
                            log("页码: " + threadPage);
                            threadTimeout = setTimeout(() => {
                                threadQp.busy = true;
                                axios
                                    .get(
                                        "http://my.4399.com/forums/index-getMtags?type=game&keyword=" +
                                            encodeURI(kwd || "") +
                                            "&page=" +
                                            threadPage,
                                        getReqCfg("arraybuffer")
                                    )
                                    .then(res => {
                                        if (!res.data)
                                            return err("获取搜索建议失败");

                                        res.data = iconv.decode(
                                            res.data,
                                            "utf8"
                                        );
                                        let d: string = res.data;
                                        const $ = cheerio.load(d);
                                        threads = {};
                                        threadData = [];
                                        threadQpItems = [];

                                        $("ul > li > a > span.title").each(
                                            (i, elem) => {
                                                let g = $(elem).text();
                                                let id:
                                                    | string
                                                    | undefined
                                                    | number = $(elem)
                                                    .parent()
                                                    .attr("href")
                                                    ?.split("-")
                                                    ?.at(-1);
                                                if (!id || isNaN(Number(id)))
                                                    return;

                                                id = Number(id);
                                                threadData.push([g, id]);
                                                threads[g] = id;
                                            }
                                        );

                                        threadData.forEach(g => {
                                            threadQpItems.push({
                                                label: g[0],
                                                description: "群组 id: " + g[1],
                                                alwaysShow: true,
                                            });
                                            threads[g[0]] = g[1];
                                        });
                                        threadQpItems.push({
                                            label: "下一页",
                                            description: "加载下一页内容",
                                            alwaysShow: true,
                                        });

                                        if (threadQpItems[0])
                                            threadQp.items = threadQpItems;

                                        threadQp.busy = false;
                                    })
                                    .catch(e => {
                                        return err(
                                            "获取搜索建议失败",
                                            String(e)
                                        );
                                    });
                            }, 1000);
                        };
                        threadQp.onDidChangeValue(kwd => {
                            if (kwd === threadSearchValue)
                                return (threadQp.items = threadQpItems);

                            threadQp.title = "4399 on VSCode: 逛群组";
                            threadSearchValue = kwd;

                            threadPage = 1;
                            search(kwd);
                        });

                        threadQp.onDidAccept(async () => {
                            if (threadQp.activeItems[0].label === "下一页") {
                                threadPage++;
                                search(threadQp.value);
                            } else if (
                                threadQp.activeItems[0].description?.includes(
                                    "群组 id"
                                )
                            ) {
                                getThreads(
                                    threads[threadQp.activeItems[0].label],
                                    threadQp.activeItems[0].label
                                );
                                globalStorage(context).set(
                                    "kwd-forums",
                                    threadQp.value
                                );
                            } else if (
                                threadQp.activeItems[0].description ===
                                "进入帖子"
                            )
                                try {
                                    if (threadQp.activeItems[0].label) {
                                        threadQp.hide();
                                        let id =
                                            threads[
                                                threadQp.activeItems[0].label
                                            ];
                                        let fullWebServerUri =
                                            await vscode.env.asExternalUri(
                                                vscode.Uri.parse(
                                                    "http://localhost:" + PORT
                                                )
                                            );
                                        let d: Buffer = (
                                            await axios.get(
                                                `https://my.4399.com/forums/thread-${id}`,
                                                getReqCfg("arraybuffer")
                                            )
                                        ).data;
                                        if (d) {
                                            const $ = cheerio.load(d);
                                            let title = $(
                                                "div.host_main_title > a"
                                            ).text();
                                            if (!title)
                                                err(
                                                    "无法获取帖子页面: 标题为空"
                                                );

                                            // 预处理
                                            // 强制使用 http
                                            $("img").each((i, elem) => {
                                                let s = $(elem).attr("src");
                                                if (
                                                    s &&
                                                    !s.startsWith("http")
                                                ) {
                                                    s = s.replace(
                                                        "//",
                                                        "http://"
                                                    );
                                                    $(elem).attr("src", s);
                                                }
                                            });
                                            // 解除防盗链限制
                                            $("img").each((i, elem) => {
                                                let u = new URL(
                                                    "/proxy/" +
                                                        $(elem).attr("src"),
                                                    String(fullWebServerUri)
                                                );
                                                $(elem).attr("src", String(u));
                                            });
                                            $(
                                                "#send-floor,[class*='user_actions'],script,style,link,meta,object"
                                            ).remove();

                                            // 从帖
                                            let singlePostHtml = "";
                                            $(".single_post").each(
                                                (i, elem) => {
                                                    if (i === 0) return;

                                                    singlePostHtml +=
                                                        " <hr/> " +
                                                        ($(
                                                            "[class*='post_author_name']",
                                                            elem
                                                        ).html() || "") + // 张三
                                                        " " +
                                                        ($(
                                                            ".post_title",
                                                            elem
                                                        ).html() || "") + // 发表于 2022-12-31 23:59:59 福建 修改于 2022-12-31 23:59:59 沙发
                                                        " <br/> " +
                                                        ($(
                                                            ".main_content",
                                                            elem
                                                        ).html() || "") + // 正文
                                                        " <br /> ";
                                                }
                                            );

                                            // 生成文章 html
                                            let html =
                                                // 主帖
                                                " <br /> <h1>" +
                                                ($(
                                                    ".mainPost .host_main_title a"
                                                ).html() || "") + // 震惊, 3 + 3 居然等于 3!
                                                "</h1> <br /> " +
                                                `
                                               <style>* {color: #888;}</style>
                                               <a href="https://my.4399.com/forums/thread-${id}">在浏览器中打开</a>
                                            ` +
                                                ($(
                                                    ".mainPost [class*='post_author_name']"
                                                ).html() || "") + // 张三
                                                " " +
                                                ($(
                                                    ".mainPost .host_title"
                                                ).html() || "") + // 楼主 发表于 2022-12-31 23:59:59 福建 修改于 2022-12-31 23:59:59
                                                " <br /> " +
                                                ($(
                                                    ".mainPost .host_content"
                                                ).html() || "") + // 正文
                                                " <br /> " +
                                                singlePostHtml;
                                            html = html
                                                .replaceAll(
                                                    /(#ffffff|#fff)/gi,
                                                    "transparent"
                                                )
                                                .replaceAll(
                                                    /(javascript|on.+=)/gi,
                                                    "ovo"
                                                );

                                            initHttpServer(() => {
                                                panel =
                                                    vscode.window.createWebviewPanel(
                                                        "4399OnVscode",
                                                        title ||
                                                            "4399 on VSCode",
                                                        vscode.ViewColumn
                                                            .Active,
                                                        {
                                                            enableScripts:
                                                                false,
                                                            localResourceRoots:
                                                                [],
                                                        }
                                                    );
                                                panel.webview.html = html;
                                            }, "http://my.4399.com/");
                                        } else err("无法获取帖子页面");
                                    }
                                } catch (e) {
                                    err("无法获取帖子页面", String(e));
                                }
                        });
                        threadQp.show();
                        if (!threadSearchValue) search(k || "");
                    } catch (e) {
                        err("无法获取群组页面", String(e));
                    }
                });
            }
        )
    );

    ctx.subscriptions.push(
        vscode.commands.registerCommand(
            "4399-on-vscode.more-action", // 更多操作
            () => {
                vscode.window
                    .showQuickPick(["启动本地服务器", "启动简易浏览器"])
                    .then(async val => {
                        if (val === "启动本地服务器")
                            initHttpServer(
                                async () => {
                                    server =
                                        (await vscode.window.showInputBox({
                                            title: "请输入被代理的服务器域名",
                                            value: "szhong.4399.com",
                                        })) || "szhong.4399.com";
                                    gamePath =
                                        (await vscode.window.showInputBox({
                                            title: "请输入游戏入口路径(可选)",
                                            placeHolder: "/foo/bar",
                                        })) || "/proxy/https://www.4399.com/";
                                    let u = new URL(
                                        gamePath,
                                        "http://" + server
                                    );
                                    if (u.pathname === "/")
                                        u.pathname =
                                            "/proxy/https://www.4399.com/";
                                    gameUrl = u.toString();
                                },
                                await vscode.window.showInputBox({
                                    title: "请输入 referer (可选)",
                                    placeHolder: "https://www.4399.com/",
                                })
                            );
                        else if (val === "启动简易浏览器")
                            showWebviewPanel(
                                (await vscode.window.showInputBox({
                                    title: "请输入网址",
                                    value: "https://www.4399.com/",
                                })) || "https://www.4399.com/",
                                "简易浏览器"
                            );
                    });
            }
        )
    );

    context = ctx;
    // 初始化数据目录
    fs.mkdir(path.join(DATA_DIR, "cache/icon"), { recursive: true }, err => {});
    fs.mkdir(
        path.join(DATA_DIR, "html-scripts"),
        { recursive: true },
        err => {}
    );
    if (!fs.existsSync(path.join(DATA_DIR, "html-scripts/example.html")))
        fs.writeFile(
            path.join(DATA_DIR, "html-scripts/example.html"),
            `\
<!-- 由 4399 on VSCode 创建的示例 HTML 代码片段 -->
<!-- 去这里看看吧 https://github.com/dsy4567/4ov-scripts -->
`,
            err => {}
        );
    // 初始化cookie
    getCookieSync();

    axios.interceptors.request.use(
        function (config) {
            let u = new URL(config.url || "https://www.4399.com");
            u.protocol = "https:"; // 强制 https
            // 域名检测
            if (u.hostname !== "4399.com" || !u.hostname.endsWith(".4399.com"))
                config.headers && (config.headers["cookie"] = "");
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    console.log("4399 on VSCode is ready!");
}
