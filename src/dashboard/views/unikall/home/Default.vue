<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>Dashboard</h1>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row v-if="true">
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Welcome')" no-body>
          <b-card-body>
            <h4>
              Welcome
              <a @click="helpUserInfoForm">
                <i
                  class="iconsminds-speach-bubble-asking"
                  style="color: #007bff"
                />
              </a>
            </h4>
            <h5>
              To start creating Your Web Profile, you should start filling the
              information below:
            </h5>

            <b-row>
              <b-colxx sm="12">
                <a href="/dashboard/app/products/products"
                  >Add a Product to Store</a
                >
                <br />
                <a href="/dashboard/app/service/service">Add a Service</a>
                <br />
                <a href="/dashboard/app/blog/blog">Add a Blog Post</a>
                <br />
                <a href="/dashboard/app/business/layout"
                  >Select Your Bussines Layout</a
                >
              </b-colxx>
            </b-row>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xl="6" lg="12">
        <icon-cards-carousel></icon-cards-carousel>
        <b-row>
          <b-colxx md="12" class="mb-4">
            <sales-chart-card></sales-chart-card>
          </b-colxx>
        </b-row>
      </b-colxx>
      <b-colxx lg="12" xl="6" class="mb-4">
        <recent-orders></recent-orders>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx lg="4" md="12" class="mb-4">
        <product-categories-polar-area></product-categories-polar-area>
      </b-colxx>
      <b-colxx lg="4" md="6" class="mb-4">
        <logs></logs>
      </b-colxx>
      <b-colxx lg="4" md="6" class="mb-4">
        <tickets></tickets>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xl="6" lg="12" class="mb-4">
        <calendar></calendar>
      </b-colxx>
      <b-colxx xl="6" lg="12" class="mb-4">
        <best-sellers :title="$t('dashboards.best-sellers')"></best-sellers>
      </b-colxx>
    </b-row>
    <sortable-statictics-row></sortable-statictics-row>
    <b-row>
      <b-colxx sm="12" md="6" class="mb-4">
        <website-visit-chart-card></website-visit-chart-card>
      </b-colxx>
      <b-colxx sm="12" md="6" class="mb-4">
        <converconversion-rates-chart-card></converconversion-rates-chart-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import BestSellers from "../../../containers/dashboards/BestSellers";
import Calendar from "../../../containers/dashboards/Calendar";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import Logs from "../../../containers/dashboards/Logs";
import Tickets from "../../../containers/dashboards/Tickets";
import ProductCategoriesPolarArea from "../../../containers/dashboards/ProductCategoriesPolarArea";
import RecentOrders from "../../../containers/dashboards/RecentOrders";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";

export default {
  components: {
    "best-sellers": BestSellers,
    calendar: Calendar,
    "converconversion-rates-chart-card": ConversionRatesChartCard,
    "icon-cards-carousel": IconCardsCarousel,
    logs: Logs,
    tickets: Tickets,
    "product-categories-polar-area": ProductCategoriesPolarArea,
    "recent-orders": RecentOrders,
    "sales-chart-card": SalesChartCard,
    "sortable-statictics-row": SortableStaticticsRow,
    "website-visit-chart-card": WebsiteVisitsChartCard,
  },
  methods: {
    helpUserInfoForm: function () {
      this.showInfo({
        message:
          "here you will find some important accesses within the dashboard",
      });
    },
  },
  notifications: {
    showError: {
      title: "Failed",
      message: "Failed",
      type: "error",
    },
    showSuccess: {
      title: "Success",
      message: "Success",
      type: "success",
    },
    showInfo: {
      title: "Information",
      message: "Success",
      type: "info",
    },
  },
};
</script>
