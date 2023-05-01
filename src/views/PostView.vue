<script setup lang="ts">
import axios from "axios";
import router from "@/router";


let item1 = localStorage.getItem("userData");

const logout = function () {
    if (item1 !== null) {
        let userData = JSON.parse(item1);
        let accessToken = userData.accessToken;
        let refreshToken = userData.refreshToken;

        console.log("accessToken::::" + accessToken);
        console.log("refreshToken:" + refreshToken);

        axios
            .delete("http://localhost:8080/api/members/logout", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                data: {
                    refreshToken: refreshToken,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log("성공적으로 해결");
                localStorage.removeItem("userData");
                router.push("/");
            })
            .catch((error) => {
                console.error(error);
            });
    }
};
</script>
<template>
    <header>
        <button class="green" @click="logout()">로그아웃</button>
    </header>
</template>