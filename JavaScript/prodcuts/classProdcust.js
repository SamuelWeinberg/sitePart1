class classProdcust {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.category = _item.category;
    this.name = _item.name;
    this.price = _item.price;
    this.img = _item.img;
  }

  render() {
    let newDiv = $(`<div class="col-6 product d-flex align-items-center"></div>`);
    $("#row").append(newDiv);
    console.log(this)
    $(newDiv).html(
      `<div class="border m-1 w-100" style=" display: flex; align-items: center;">
          <img src="${this.img}" class="mr-2" style="max-width: 100px;">
          <div>
            <h2>${this.name}</h2>
            <div>${this.category}</div>
            <h3>${this.price}</h3>
          </div>
        </div>`
    );
  }
}
export default classProdcust