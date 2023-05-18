export type AmpikaProduct = {
    "prod_kod": string;
    "prod_id": string;
    "marketplace_prod_id": string;
}

export interface AmpikaGetProductsResult {
    records?: AmpikaProduct[];
}

