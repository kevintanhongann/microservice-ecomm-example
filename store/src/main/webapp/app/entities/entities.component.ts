import { Component, Provide, Vue } from 'vue-property-decorator';

import UserService from '@/entities/user/user.service';
import NotificationService from './notification/notification/notification.service';
import InvoiceService from './invoice/invoice/invoice.service';
import ProductOrderService from './product-order/product-order.service';
import OrderItemService from './order-item/order-item.service';
import ShipmentService from './invoice/shipment/shipment.service';
import CustomerService from './customer/customer.service';
import ProductService from './product/product.service';
import ProductCategoryService from './product-category/product-category.service';
// jhipster-needle-add-entity-service-to-entities-component-import - JHipster will import entities services here

@Component
export default class Entities extends Vue {
  @Provide('userService') private userService = () => new UserService();
  @Provide('notificationService') private notificationService = () => new NotificationService();
  @Provide('invoiceService') private invoiceService = () => new InvoiceService();
  @Provide('productOrderService') private productOrderService = () => new ProductOrderService();
  @Provide('orderItemService') private orderItemService = () => new OrderItemService();
  @Provide('shipmentService') private shipmentService = () => new ShipmentService();
  @Provide('customerService') private customerService = () => new CustomerService();
  @Provide('productService') private productService = () => new ProductService();
  @Provide('productCategoryService') private productCategoryService = () => new ProductCategoryService();
  // jhipster-needle-add-entity-service-to-entities-component - JHipster will import entities services here
}
