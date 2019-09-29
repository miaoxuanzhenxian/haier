import axios from "axios";

export default {
    namespaced: true,
    state: {
        navCategories:[],
        navCategoriesList:[],
        navCategoriesId:undefined,
    },
    mutations: {
        getNavCategories(state,payload){
            state.navCategories = payload;
        },
        getCategoriesList(state,payload){
            state.navCategoriesList = payload.categoriesList;
            state.navCategoriesId = payload.parentId;
        }
    },
    actions: {
        getNavCategories(context,callback){
            axios.get('/navigation/getNavCategories').then(result => {
                if(result.data.success){
                    context.commit('getNavCategories',result.data.data);
                    context.dispatch('getCategoriesList',result.data.data[0].id);
                    callback(result.data.data[0].id);
                }
            }).catch(err => {
                console.error(err);
            });
        },
        getCategoriesList(context,parentId){
            axios.get('/navigation/getCategoriesList?parentId='+parentId).then(result => {
                if(result.data.success){
                    context.commit('getCategoriesList',{
                        categoriesList:result.data.data,
                        parentId
                    });
                }
            }).catch(err => {
                console.error(err);
            });
        }
    },
    getters:{
        slideShow(state){
            return state.navCategoriesList.filter(item => {
               return item.bannerId && item.levels == '1';
            }).sort((a,b) => {
                return a.sortNum - b.sortNum
            });
        },
        branchTyList(state){
            let listArry = state.navCategoriesList.filter((item) => {
               return !item.bannerId;
            });
            let listTitleArr =listArry.filter((item) => {
                 return item.parentId == state.navCategoriesId;
            }).sort((a,b) => {
                return a.sortNum - b.sortNum;
            });
            listTitleArr.forEach((itemTitle) => {
                 let childrenArr= listArry.filter((item) => {
                    return item.parentId == itemTitle.id;
                }).sort((a,b) => {
                    return a.sortNum - b.sortNum;
                 });
                itemTitle.children = childrenArr;
            });
            return listTitleArr;
        }
    }
}
