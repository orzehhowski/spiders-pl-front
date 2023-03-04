<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
</script>

<script>
export default {
  data() {
    return {
      isAuth: false,
      isAdmin: false,
      userId: null,
      token: null,
    };
  },
  methods: {
    async login(email, password) {
      const res = await fetch(`${this.$API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.status !== 200) {
        //error
      } else {
        const resBody = await res.json();
        this.isAuth = true;
        this.isAdmin = resBody.isAdmin;
        this.userId = resBody.userId;
        this.token = resBody.token;
        localStorage.setItem("token", resBody.token);
        localStorage.setItem("isAdmin", resBody.isAdmin);
        localStorage.setItem("isAuth", true);
        localStorage.setItem("userId", resBody.userId);
        const remainingMs = 12 * 60 * 60 * 1000;
        const expiryDate = new Date(new Date().getTime() + remainingMs);
        localStorage.setItem("expiryDate", expiryDate.toISOString());
      }
      location.replace("/");
    },

    logout() {
      this.isAuth = false;
      this.isAdmin = false;
      this.userId = null;
      this.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("userId");
      localStorage.removeItem("expiryDate");
      location.replace("/");
    },
  },
  mounted() {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logout();
      return;
    }
    this.userId = localStorage.getItem("userId");
    this.isAuth = !!localStorage.getItem("isAuth");
    this.isAdmin = !!localStorage.getItem("isAdmin");
    this.token = token;
  },
};
</script>

<template>
  <TheNavbar
    :isAuth="isAuth"
    :isAdmin="isAdmin"
    :userId="userId"
    :token="token"
    :loginHandler="login"
    :logoutHandler="logout"
  />
  <RouterView
    :isAuth="isAuth"
    :isAdmin="isAdmin"
    :userId="userId"
    :token="token"
    :loginHandler="login"
    :logoutHandler="logout"
  />
</template>

<style lang="scss">
.italic {
  font-style: italic;
}

hr.small {
  width: 40%;
}

.resources {
  overflow-x: hidden;
}

.carousel {
  border-radius: 10px;
  max-height: 30rem;
  max-width: 36rem;
  overflow: hidden;
  img {
    object-fit: cover;
  }
}
</style>
