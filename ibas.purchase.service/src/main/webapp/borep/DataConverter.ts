/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {

        /** 数据转换者 */
        export class DataConverter extends ibas.DataConverter4j {

            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter {
                return new BOConverter;
            }
        }

        /** 业务对象转换者 */
        class BOConverter extends ibas.BOConverter {

            /**
             * 自定义解析
             * @param data 远程数据
             * @returns 本地数据
             */
            protected customParsing(data: any): ibas.IBusinessObject {
                return data;
            }

            /**
             * 转换数据
             * @param boName 对象名称
             * @param property 属性名称
             * @param value 值
             * @returns 转换的值
             */
            protected convertData(boName: string, property: string, value: any): any {
                if (boName === bo.PurchaseOrder.name) {
                    if (property === bo.PurchaseOrder.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseOrderItem.name) {
                    if (property === bo.PurchaseOrderItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseOrderItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseDelivery.name) {
                    if (property === bo.PurchaseDelivery.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseDeliveryItem.name) {
                    if (property === bo.PurchaseDeliveryItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseDeliveryItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseReturn.name) {
                    if (property === bo.PurchaseReturn.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseReturnItem.name) {
                    if (property === bo.PurchaseReturnItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseReturnItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.ShippingAddress.name) {
                    if (property === bo.ShippingAddress.PROPERTY_SHIPPINGSTATUS_NAME) {
                        return ibas.enums.toString(emShippingStatus, value);
                    }
                }
                return super.convertData(boName, property, value);
            }

            /**
             * 解析数据
             * @param boName 对象名称
             * @param property 属性名称
             * @param value 值
             * @returns 解析的值
             */
            protected parsingData(boName: string, property: string, value: any): any {
                if (boName === bo.PurchaseOrder.name) {
                    if (property === bo.PurchaseOrder.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseOrderItem.name) {
                    if (property === bo.PurchaseOrderItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseOrderItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseDelivery.name) {
                    if (property === bo.PurchaseDelivery.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseDeliveryItem.name) {
                    if (property === bo.PurchaseDeliveryItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseDeliveryItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseReturn.name) {
                    if (property === bo.PurchaseReturn.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseReturnItem.name) {
                    if (property === bo.PurchaseReturnItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseReturnItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.ShippingAddress.name) {
                    if (property === bo.ShippingAddress.PROPERTY_SHIPPINGSTATUS_NAME) {
                        return ibas.enums.valueOf(emShippingStatus, value);
                    }
                }
                return super.parsingData(boName, property, value);
            }
        }
    }
}