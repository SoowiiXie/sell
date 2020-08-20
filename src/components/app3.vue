<template>
  <div id="app3">
    <input type="text" v-model="keyword">
    <div id="board" class="flex mt-2 px-1 col-6">
      <div class="bg-secondary mx-2 rounded" v-for="school in filteredList" :key="school.o_tlc_agency_name">
        <h2 class="px-3 py-1"><strong>{{school.o_tlc_agency_name}}</strong></h2>
        <!-- <Card v-for="card in school.o_tlc_agency_address" :card="card" :key="card.nothing"></Card> -->
        <Card :card="school.o_tlc_agency_address"></Card>
        
        <div class="input-area mx-auto bg-danger py-2 rounded-lg">
          <button class="button mx-auto rounded-lg bg-success" v-if="!editing" @click="newCard">新增卡片</button>
          <textarea class="content mx-2 rounded-lg" v-if="editing" v-model="content"></textarea>
          <button class="button mx-auto rounded-lg" v-if="editing" @click="createCard">建立卡片</button>
          <button class="button mx-auto rounded-lg" v-if="editing" @click="editing=false">取消</button>
        </div>
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
import Card from '.././components/card';
import axios from "axios";

export default {
  name: "app3",
  // props: ["item"],  //外面餵進來
  components: { Card },//引用後註冊元件
  data: function() {
    return {
      keyword: "",
      list777: [],
      content: "",
      editing: false
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
    newCard(event){
      event.preventDefault();
      this.editing=true;
    },
    deleteLastItem() {
      this.list777.splice(this.list777.length - 1, 1);
    },
    createCard(event){
      event.preventDefault();
      this.list777.splice(0, 0,JSON.parse("{\"o_tlc_agency_name\" : \""+this.content+"\",\"o_tlc_agency_address\" : \""+this.content+"\"}"));
      this.editing=false;
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
</style>
