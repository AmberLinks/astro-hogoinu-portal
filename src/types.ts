// 団体の型 (microCMSのAPIスキーマに合わせてください)
export interface Group {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  group_name: string;
  source_url: string;
}

// 犬の型 (microCMSのAPIスキーマに合わせてください)
export interface Dog {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  status: string; // セレクトフィールド
  group: Group; // コンテンツ参照
  age: string; // テキストフィールド (「推定5歳」など)
  gender: string; // セレクトフィールド
  image_url: string; // 画像（または画像URL）
  description: string; // リッチエディタ
  breed: string; // セレクトフィールド
}

// microCMSのリスト形式APIの共通レスポンス型
export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}