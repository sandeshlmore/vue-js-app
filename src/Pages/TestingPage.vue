<template>
    <div style="background-color:red">
        <p style="background-color:coral"> Welcome To Testing page!!!</p>
    <div>
        <p style="background-color:blue "> Welcome To Testing page!!!</p>
        <input type="button" value="Click Me" @click="get_data  ">{{users}}
    </div>
    <!-- <a v-bind:href="url">link</a> -->
    </div>
</template>

<script>
  import axios from 'axios';

export default {
    data(){
        return {
        name : "sandesh",
        users: "No Users",
        url : 'https://storage.googleapis.com/retailer_bucket_1/Icon_Cluster_Requests.png'
        ,csv_url : 'https://storage.googleapis.com/retailer_bucket_1/1581079415.7655663.csv'
    }
    },
    methods : {
            forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.target = "_blank"
    //   link.setAttribute('download', 'Icon_Cluster_Requests.png') //or any other extension
      document.body.appendChild(link)
      link.click()
    },


        get_data(){
            // users : https://jsonplaceholder.typicode.com/users
                axios.get(this.csv_url).then(response => {
        //   this.users = res.data;
        const blob = new Blob([response.data], { type: 'text/csv' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.target = "_blank"
        link.download = 'csv_file.csv'
        link.click()
        URL.revokeObjectURL(link.href)
        })
        }
    }
}
</script>