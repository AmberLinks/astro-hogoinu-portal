import { createClient } from "microcms-js-sdk";

// 環境変数から情報を取得
const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error("microCMSの環境変数が設定されていません。");
}

// microCMSクライアントを作成
export const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});