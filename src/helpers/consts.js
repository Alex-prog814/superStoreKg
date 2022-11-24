// часто бывает, когда нам необходимо хранить какие-либо данные в константах, к примеру, представим что мы сменили сервер и теперь путь к нему изменился, мы можем использовать путь к серверу во многих контекстах и нам будет неудобно просто ходить по всем файлам и искать все это дело, поэтому такие переменные мы можем вынести в отдельный файл, а потом просто пользоваться, или например мы можем называть экшены как нам хочется???

export const ACTIONS = {
    GET_PRODUCTS: "GET_PRODUCTS",
    GET_PRODUCT_DETAILS: "GET_PRODUCT_DETAILS",
};

// также экшены для корзины
export const CART = {
    GET_CART: "GET_CART",
    GET_CART_LENGTH: "GET_CART_LENGTH",
};

// export const JSON_API_PRODUCTS = "http://localhost:8000/products"; //было так 
export const JSON_API_PRODUCTS = "https://super-store-kg.herokuapp.com/api/products"; //станет так