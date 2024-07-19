function OrdersList({ orders }) {
  const { id, hotelId, image, name, price, quantity } = orders;

  return (
    <>
      <div className="mx-4 flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg transition-shadow hover:shadow-xl sm:flex-row">
        <img className="h-[10rem] w-[10rem]" src={image} alt={name} />
        <div className="flex flex-col justify-center gap-2 text-lg">
          <p className="font-semibold">{name}</p>
          <p className="text-primary">{`₹ ${price}`}</p>
          <p>Quantity {quantity}</p>
        </div>
      </div>
    </>
  );
}

export default OrdersList;
