<script type="text/javascript">
function searchPrimo() {
  document.getElementById("primoQuery").value =
    "any,contains," +
    document.getElementById("primoQueryTemp").value.replace(/[,]/g, " ");
  document.forms["OnesearchForm"].submit();
}
</script>