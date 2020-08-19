<template>
  <div id="app3">
    <input type="text" v-model="keyword">
    <div id="board" class="flex mt-2 px-1 col-3">
      <div class="bg-secondary mx-2 rounded" v-for="item in filteredList" :key="item.o_tlc_agency_name">
        <h2 class="px-3 py-1"><strong>{{item.o_tlc_agency_name}}</strong></h2> 
      </div>
    </div>
    <ul>
      <li v-for="item in filteredList" :key="item.o_tlc_agency_name">{{item.o_tlc_agency_name}}</li>
    </ul>
    <a href @click.prevent="deleteLastItem">刪除最後一個項目</a>
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!"/> -->
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "app3",
  props: ["item"],
  components: {
    
  },
  data: function() {
    return {
      keyword: "",
      list777: []
    };
  },
  computed: {
    filteredList: function() {
      return this.list777.filter(item => {
        return item.o_tlc_agency_name.indexOf(this.keyword) !== -1;
      });
    }
  },
  methods: {
    deleteLastItem() {
      this.list777.splice(this.list777.length - 1, 1);
    }
  },
  mounted: function() {
    axios
      .get(
        "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=24c9f8fe-88db-4a6e-895c-498fbc94df94"
      )
      .then(response => {
        console.log(response.data.result.results);
        this.list777 = response.data.result.results;
      });
  }
};
</script>

<style scoped>
@import 'bootstrap';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
