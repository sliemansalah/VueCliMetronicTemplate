<template>
<div class="center fs-48 clr-blue mt-200">
    <a href="/admin">Go To dashboard</a>
    <p>This page design by 
      <a 
         href="https://www.facebook.com/sosomanisme" 
         target="_blank"> Solayman M. Salah
      </a>
    </p>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style>
.mt-200{margin-top: 200px;}
.center{text-align: center;}
.fs-48{font-size: 48px;}
a{
  text-decoration: none;
   color: blue;
   font-weight: bold;
}
a:hover{color:red;}
p{font-style: italic;}
p a {
  color:green;
  font-weight:bold;
  }
p a:hover{ color:blueviolet;}
</style>
