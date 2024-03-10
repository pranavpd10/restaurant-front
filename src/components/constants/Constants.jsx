const BACK_END_URL = "http://localhost"
const BACK_END_PORT = "8080"
export const BACK_END_PATH_URL = `${BACK_END_URL}:${BACK_END_PORT}`
export const GET_ALL_MENU_ITEMS = "/menuitems"
export const GET_REVIEWS = "/getReviews"
export const REVIEWS_BUTTON = "reviewsButton"


export function createReviewUrl(menuItemId, column){
    console.log("menuItemId, column ",menuItemId, column)
    let reviewUrl = `${BACK_END_PATH_URL}${GET_REVIEWS}/${menuItemId}`
    if(column!=undefined && column!=null){
        reviewUrl = `${reviewUrl}?column=${column}`
    }
    return reviewUrl;
}