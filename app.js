/**
 * This function for get element from html document
 * @param {*} data 
 * @returns 
 */
function $(data){
    let elements = document.querySelectorAll(data);
    if(elements.length == 1){
        return elements[0];
    }else{
        let elemetarr = [];
        elements.forEach((individual) => {
            elemetarr.push(individual);
        })
        return elemetarr;
    }
}
//====================================================//

$('.content-btn').onclick = () => {
    $('.classformodal').classList.add('open')
}
$('.btn-modal').onclick = () => {
    $('.classforalert').classList.add('open')
}
$('.btn-continue').onclick = () => {
    $('.classforalert').classList.remove('open')
}
$('.btn-alert').onclick = () => {
    $('.classforalert').classList.remove('open')
}
$('.btn-discard').onclick = () => {
    $('.classformodal').classList.remove('open')
    $('.classforalert').classList.remove('open')
}
