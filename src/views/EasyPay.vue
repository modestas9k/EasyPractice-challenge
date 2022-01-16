<template>
  <div class="bg-gray-200">
      <div class="md:container md:mx-auto pb-8" >
          <h2 class="font-bold text-2xl py-4">EasyPay</h2>
          <div class="flex flex-row gap-4">
            <SimpleCard title="Account" bigText="DKK 1356,22" description='Amount that has not been transferred to your bank account yet.'/>
            <SimpleCard title="Online payment count" bigText="17" description='Total amount of online payments you have received via EasyPay.'/>
            <SimpleCard title="Future Payments" bigText="DKK 4356,22" description='Amount that will be charget in the future via EasyPay.'/>
          </div>
          <!-- Payment Filters -->
          <div class="my-6 flex flex-row justify-between">
            <select name="ongoing payment" v-model="paymentFilter" @change="change" id="paymentFilter" 
              class="py-3 px-4 rounded-md border border-gray-300">
              <option value="ongoingpayment" default>Ongoing sayments</option>
              <option value="all">All</option>
              <option value="charged">Charged</option>
              <option value="refunded">Refunded</option>
            </select>
            <input  v-model="searchValue" type="text" placeholder="Search" 
              class="px-4 rounded border border-gray-300 min-w-20">
          </div>
          <!-- Payment Cards -->
          <div v-show="searchValue">
            <div v-for="payment in searchResults" :key="payment.id" class="flex flex-col mt-5">
              <PaymentCard :date="payment.created_at" :status="payment.status_short_formatted" 
                :clientName="payment.client.name" :currency="payment.currency" :amount="payment.amount" />
            </div>
          </div>
          
          <div v-show="!searchValue">
            <div v-for="payment in data" :key="payment.id" class="flex flex-col mt-5">
              <PaymentCard :date="payment.created_at" :status="payment.status_short_formatted" 
                :clientName="payment.client.name" :currency="payment.currency" :amount="payment.amount" />
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import SimpleCard from '../components/SimpleCard.vue';
import PaymentCard from '../components/PaymentCard.vue';
import dataExample from '../../dataExample';

export default {
  name: "EasyPay",
  components: {
    SimpleCard, PaymentCard
  },
  data() {
    return {
      data: dataExample,
      paymentFilter: 'ongoingpayment',
      searchValue: '',
    }
  },
  mounted() {
    this.change()
  },
  methods: {
    change() {
      switch (this.paymentFilter) {
        case 'all':
          this.data = dataExample;
          break;
        case 'charged': 
          this.data = dataExample.filter((payment) => payment.status === 'charged');
          break;
        case 'refunded':
          this.data = dataExample.filter((payment) => payment.status === 'refunded');
          break;
        case 'ongoingpayment':
          this.data = dataExample.filter((payment) => payment.status !== 'paid' && payment.status !== 'failed');
          break;
        default:
          this.data = dataExample;
          break;
      }
    }
  },
  computed: {
    searchResults() {
      return this.data.filter((payment) => {
        return payment.client.name.toLowerCase().includes(this.searchValue.toLowerCase())
      })
    }
  }
};
</script>
