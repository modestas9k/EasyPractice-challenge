<template>
    <div :class="[status === 'Charged' ? 'border-l-8 border-blue-400' : 'border-l-8']" 
        class="bg-white rounded-md p-4  shadow-md flex flex-row gap-4">
        <span class="flex-1 text-sm font-medium">{{ formatDate(date) }}</span>
        <span class="flex-1 text-sm font-medium text-gray-400">{{ status }}</span>
        <span class="flex-1 text-sm font-medium text-gray-400 truncate">{{ clientName}}</span>
        <span class="flex-1 text-sm font-medium text-gray-400">{{ currency }} {{ amount}}</span>
    </div>
</template>
<script>
import moment from 'moment';

export default {
    name: 'PaymentCard',
    props: {
        date: String,
        status: String,
        clientName: String,
        currency: String,
        amount: Number
    },
    methods: {
        formatDate(date) {
            return moment(date).format('DD. MMMM YYYY, HH:mm');
        }
    }
}
</script>