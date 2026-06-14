document.addEventListener("DOMContentLoaded", function () {
  let products = [];

  $.ajax({
    url: "https://challenges.brainster.tech/ajax_data/data.json",
    method: "GET",
    dataType: "json",

    success: function (response) {
      products = response.products || response;

      createBrandFilters(products);
      updateBadges(products);
      renderProducts(products);
    },

    error: function () {
      console.log("Failed to load products");
    },
  });

  function renderProducts(data) {
    $("#products-container").html("");

    data.forEach((product) => {
      $("#products-container").append(`
                <div class="col-md-4">
                    <div class="product-card">

                        <img
                            src="./img/${product.image}.png"
                            class="product-image"
                            alt="${product.name}"
                        >

                        <div class="product-info">

                            <div class="product-title">
                                ${product.name}
                            </div>

                            <div class="product-price">
                                ${product.price} $
                            </div>

                        </div>

                    </div>
                </div>
            `);
    });
  }

  function updateBadges(products) {
    $("#all-count").text(products.length);

    const males = products.filter(
      (product) => product.gender.toLowerCase() === "male",
    );

    const females = products.filter(
      (product) => product.gender.toLowerCase() === "female",
    );

    $("#male-count").text(males.length);
    $("#female-count").text(females.length);
  }

  function createBrandFilters(products) {
    const brands = {};

    products.forEach((product) => {
      if (!brands[product.brand]) {
        brands[product.brand] = 0;
      }

      brands[product.brand]++;
    });

    Object.keys(brands).forEach((brand) => {
      $("#brands-container").append(`
                <div
                    class="brand-filter"
                    data-brand="${brand}"
                >
                    <span>${brand}</span>
                    <span class="badge">
                        ${brands[brand]}
                    </span>
                </div>
            `);
    });
  }

  // SHOW ALL

  $(document).on("click", '[data-type="all"]', function () {
    $(".active-filter").removeClass("active-filter");
    $(this).addClass("active-filter");

    renderProducts(products);
  });

  // GENDER FILTERS

  $(document).on("click", '[data-type="gender"]', function () {
    $(".active-filter").removeClass("active-filter");
    $(this).addClass("active-filter");

    const gender = $(this).data("value");

    const filtered = products.filter(
      (product) => product.gender.toLowerCase() === gender,
    );

    renderProducts(filtered);
  });

  // BRAND FILTERS

  $(document).on("click", ".brand-filter", function () {
    $(".active-filter").removeClass("active-filter");
    $(this).addClass("active-filter");

    const brand = $(this).data("brand");

    const filtered = products.filter((product) => product.brand === brand);

    renderProducts(filtered);
  });
});
