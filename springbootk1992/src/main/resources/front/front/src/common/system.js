export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","审核","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"帖子分类","menuJump":"列表","tableName":"tiezifenlei"}],"menu":"帖子分类管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除","审核","查看评论"],"menu":"帖子信息","menuJump":"列表","tableName":"tiezixinxi"}],"menu":"帖子信息管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","回复","删除"],"menu":"意见反馈","tableName":"messages"}],"menu":"意见反馈"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["删除","新增","查看","修改"],"menu":"公告资讯","tableName":"news"},{"appFrontIcon":"cuIcon-album","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-pay","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"帖子信息列表","menuJump":"列表","tableName":"tiezixinxi"}],"menu":"帖子信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除","查看评论"],"menu":"帖子信息","menuJump":"列表","tableName":"tiezixinxi"}],"menu":"帖子信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"帖子信息列表","menuJump":"列表","tableName":"tiezixinxi"}],"menu":"帖子信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
