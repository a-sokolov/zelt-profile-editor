export type OzonProductInfo = {
  id: number;
  name: string;
  offer_id: string;
  barcode: string;
  buybox_price: string;
  category_id: number;
  created_at: string;
  images: string[];
  marketing_price: string;
  min_ozon_price: string;
  old_price: string;
  premium_price: string;
  price: string;
  recommended_price: string;
  min_price: string;
  sources: Array<{
    is_enabled: boolean;
    sku: number;
    source: string;
  }>;
  stocks: {
    coming: number;
    present: number;
    reserved: number;
  };
  errors: unknown[];
  vat: string;
  visible: boolean;
  visibility_details: {
    has_price: boolean;
    has_stock: boolean;
    active_product: boolean;
    reasons: unknown;
  };
  price_index: string;
  images360: string[];
  color_image: string;
  primary_image: string;
  status: {
    state: string;
    state_failed: string;
    moderate_status: string;
    decline_reasons: unknown[];
    validation_state: string;
    state_name: string;
    state_description: string;
    is_failed: boolean;
    is_created: boolean;
    state_tooltip: string;
    item_errors: unknown[];
    state_updated_at: string;
  };
  state: string;
  service_type: string;
  fbo_sku: number;
  fbs_sku: number;
  currency_code: string;
  is_kgt: boolean;
  rating: string;
  discounted_stocks: {
    coming: number;
    present: number;
    reserved: number;
  };
  is_discounted: boolean;
  has_discounted_item: boolean;
  barcodes: unknown[];
  updated_at: string;
  price_indexes: Record<
    string,
    | string
    | {
        minimal_price: string;
        minimal_price_currency: string;
        price_index_value: number;
      }
  >;
};

export interface OzonGetProductInfoListResult {
  result?: {
    items?: OzonProductInfo[];
  };
}

export type OzonGetProductInfoListFilter = {
  product_id: number[];
}