
interface PingResponse {
  message: string;
}

export default class PingService {
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "pong",
    };
  }
}