// 団体の型 (microCMSのAPIスキーマに合わせてください)
export interface Group {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  group_name: string;
  source_url: string;
  email: string; // ▼ 追加: 連絡先メールアドレス
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
  sns_url?: string; // ▼ 追加: SNSリンク (任意)
}

// ▼ 追加: お知らせの型 (エンドポイント名 'news' を想定)
export interface News {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string; // ※リッチエディタやテキストフィールドなど、実際の型に合わせてください
}

// microCMSのリスト形式APIの共通レスポンス型
export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}