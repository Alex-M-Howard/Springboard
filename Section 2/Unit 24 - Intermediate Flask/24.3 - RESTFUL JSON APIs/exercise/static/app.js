$('#add-button').click(async (event) => {
    event.preventDefault();
    await addCupcake();
    loadCupcakes();
    initForm();
})

async function addCupcake() {
    let flavor = $('#flavor').val()
    let rating = $('#rating').val()
    let size = $('#size').val()
    let image = $('#image').val()

    data = { flavor, rating, size, image }
    await axios.post(`/api/cupcakes`, data);

}

async function loadCupcakes() {
    $('ul').empty()
    let cupcakes = await axios.get(`/api/cupcakes`);

    for (let cupcake of cupcakes.data.cupcakes) {
        $('ul').append(`<li>${cupcake.flavor}</li>`)
    }
    console.log(cupcakes.data.cupcakes)
}

function initForm() {
    let flavor = $("#flavor").val('');
    let rating = $("#rating").val('');
    let size = $("#size").val('');
    let image = $("#image").val('');
}

loadCupcakes();