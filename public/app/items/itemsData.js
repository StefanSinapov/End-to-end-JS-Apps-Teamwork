﻿'use strict';

app.factory('itemsData', function ($http, $q) {
    
    var createItem = function (newItem) {
        var deferred = $q.defer();

        var formData = new FormData();
        formData.append('title', newItem.title);
        formData.append('description', newItem.description);
        formData.append('price', newItem.price);
        formData.append('categories', newItem.categories);
        formData.append('image', newItem.image);
        
        $http.post('/api/items', formData, {
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                }
            )
            .success(function (item) {
                deferred.resolve(item);
            })
            .error(function (error) {
                deferred.reject(error);
            });
        
        return deferred.promise;
    };
    
    return {
        create: createItem
    }
});