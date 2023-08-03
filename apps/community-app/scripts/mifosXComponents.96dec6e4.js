define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.e7387d4c'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService',
            'NotificationResponseHeaderProvider'
        ],
        controllers: [
            'controllers.40a7a3ae'
        ],
        filters: [
            'filters.4509a004'
        ],
        directives: [
            'directives.be931068'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.e64a22f7'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
