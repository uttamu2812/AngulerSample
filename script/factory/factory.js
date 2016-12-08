mainApp.factory('Factory',["$resource", function($resource){
        return $resource('/resources/:file',{},{
           
             getRegisteredUserFilterData:{
                method:'GET',
                isArray:false,
                params:{
                    file : 'filter_data.json'
                }
            },
             getUserApproveFilterData:{
                method:'GET',
                isArray:false,
                params:{
                    file : 'user_approve_filter_date.json'
                }
            },
             getPhotoApproveFilterData:{
                method:'GET',
                isArray:false,
                params:{
                    file : 'photo_approve_filter_date.json'
                }
            },
            
             getBlogApproveFilterData:{
                method:'GET',
                isArray:false,
                params:{
                    file : 'blog_approve_filter_date.json'
                }
            },
             getApprovedUserList:{
                method:'GET',
                isArray:false,
                params:{
                    file : 'approved_user_list.json'
                }
            },
            getUserToBeApproveList:{
                 method:'GET',
                isArray:false,
                params:{
                    file : 'user_to_be_approve_list.json'
                }
            },

            getUserDetails:{
                 method:'GET',
                isArray:false,
                params:{
                    file : 'user_details.json'
                }
            },
            getUserTimeLine:{
                 method:'GET',
                isArray:false,
                params:{
                    file : 'timeline.json'
                }
            },
              getPostsTobeApprove:{
                 method:'GET',
                isArray:false,
                params:{
                    file : 'posts.json'
                }
            },
             getApprovedPosts:{
                 method:'GET',
                isArray:false,
                params:{
                    file : 'posts.json'
                }
            }


             
      });
}]);
