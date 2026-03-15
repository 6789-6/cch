const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootk1992/",
            name: "springbootk1992",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootk1992/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于JavaEE的Java技术交流主题论坛的设计与实现"
        } 
    }
}
export default base
