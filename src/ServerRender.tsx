import {
    decodeReply,
    renderToPipeableStream,
  } from "react-server-dom-webpack/server";
import * as OS from "node:os";
import { PassThrough } from "node:stream";
import InspirationGenerator from "TestCom";

function App() {
    return (
      <>
        <h1>Hello World!</h1>
        {/* <MovieWatch m3u8Link={"http://ahihi.com"} name={"dat09"} posterUrl={"none"} nextEp={"xinchao"} /> */}
        <InspirationGenerator>
            <div>ahihi</div>
        </InspirationGenerator>
        <h2>
          {OS.type()} {OS.arch()} {OS.release()}
        </h2>
        {new Date().toISOString()}
      </>
    );
  }
export function AppRender() {
    const body = new PassThrough();
    const {pipe} = renderToPipeableStream(
        <InspirationGenerator>
            <div>ahihi</div>
        </InspirationGenerator>, {})
    pipe(body);
    return body;
}
