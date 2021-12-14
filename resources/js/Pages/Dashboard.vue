<template>
  <div class="d-flex flex-column">
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div
              class="
                d-flex
                flex-wrap flex-row
                justify-content-between
                align-items-center
              "
            >
              <h6 class="card-title">Main</h6>
              <!-- <ActionButton
                v-for="button in buttons"
                :key="button.i"
                :title="button.title"
                :color="button.color"
                :type="button.type"
                @clicked="handleAction"

              /> -->
            </div>
            <hr />
            <div class="d-flex flex-row flex-wrap">
              <div
                class="card col-lg-3 mx-2 mt-2"
                :style="'border-left: 2px solid ' + card.color"
                v-for="card in cards"
                :key="card.num"
              >
                <DashboardCard :title="card.name" :value="card.num" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const DashboardCard = () => import("../components/DashboardCard.vue");
export default {
  mounted() {},
  data() {
    return {
      cards: [
        {
          name: "momen",
          num: 1000,
        },
        {
          name: "salah",
          num: 2000,
        },
      ],
    };
  },
  components: {
    DashboardCard,
  },
  methods: {},
};
</script>

<style></style>
