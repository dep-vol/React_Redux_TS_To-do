export const popupActions = {
    showPopup: (message:string) => ({type:"SHOW_POPUP",message} as const),
    confirmPopup: (confirm:boolean) => ({type:"CONFIRM_POPUP",confirm} as const)
};