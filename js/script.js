(function(angular) {
    'use strict';
    var routers = {};
    routers.index = {
        state: 'index',
        config: {
            url: '/',
            templateUrl: 'tpls/index.html',
            controller: 'indexCtrl'
        },
        title: '首页'
    };
    routers.overview = {
        state: 'overview',
        config: {
            url: '/overview',
            templateUrl: 'tpls/overview.html',
            controller: 'overviewCtrl'
        },
        title: '服务全览'
    };
    routers.demo = {
        state: 'demo',
        config: {
            url: '/demo',
            views: {
                '@': {
                    templateUrl: 'tpls/demo.html',
                    controller: 'demoCtrl'
                }
            }
        },
        title: '算法演示'
    };
    routers['demo.face'] = {
        state: 'demo.face',
        config: {
            url: '/face',
            views: {
                '@': routers.demo.config.views['@'],
                'subView@demo.face': {
                    templateUrl: 'tpls/demo/face.html',
                    controller: 'demoFaceCtrl'
                }
            }
        },
        title: '人脸比对'
    };
    routers['demo.idCard'] = {
        state: 'demo.idCard',
        config: {
            url: '/idCard',
            views: {
                '@': routers.demo.config.views['@'],
                'subView@demo.idCard': {
                    templateUrl: 'tpls/demo/idCard.html',
                    controller: 'demoIdCardCtrl'
                },
                'subViewBatch@demo.idCard': {
                    templateUrl: 'tpls/demo/Batch.html',
                    controller: 'demoBatchCtrl'
                }
            }
        },
        title: '身份证识别'
    };
    routers['demo.creditCard'] = {
        state: 'demo.creditCard',
        config: {
            url: '/creditCard',
            views: {
                '@': routers.demo.config.views['@'],
                'subView@demo.creditCard': {
                    templateUrl: 'tpls/demo/creditCard.html',
                    controller: 'demoCreditCardCtrl'
                },
                'subViewBatch@demo.creditCard': {
                    templateUrl: 'tpls/demo/Batch.html',
                    controller: 'demoBatchCtrl'
                }
            }
        },
        title: '银行卡识别'
    };
    routers['demo.vat'] = {
        state: 'demo.vat',
        config: {
            url: '/vat',
            views: {
                '@': routers.demo.config.views['@'],
                'subView@demo.vat': {
                    templateUrl: 'tpls/demo/vat.html',
                    controller: 'demoVatCtrl'
                },
                'subViewBatch@demo.vat': {
                    templateUrl: 'tpls/demo/Batch.html',
                    controller: 'demoBatchCtrl'
                }
            }
        },
        title: '增值税发票识别'
    };
    routers['demo.finSta'] = {
        state: 'demo.finSta',
        config: {
            url: '/finSta',
            views: {
                '@': routers.demo.config.views['@'],
                'subView@demo.finSta': {
                    templateUrl: 'tpls/demo/finSta.html',
                    controller: 'demoFinStaCtrl'
                },
                'subViewBatch@demo.finSta': {
                    templateUrl: 'tpls/demo/Batch.html',
                    controller: 'demoBatchCtrl'
                }
            }
        },
        title: '财务报表识别'
    };
    routers['demo.busLis'] = {
        state: 'demo.busLis',
        config: {
            url: '/busLis',
            views: {
                '@': routers.demo.config.views['@'],
                'subView@demo.busLis': {
                    templateUrl: 'tpls/demo/busLis.html',
                    controller: 'demoBusLisCtrl'
                },
                'subViewBatch@demo.busLis': {
                    templateUrl: 'tpls/demo/Batch.html',
                    controller: 'demoBatchCtrl'
                }
            }
        },
        title: '营业执照识别'
    };
    routers['demo.fullText'] = {
        state: 'demo.fullText',
        config: {
            url: '/fullText',
            views: {
                '@': routers.demo.config.views['@'],
                'subView@demo.fullText': {
                    templateUrl: 'tpls/demo/fullText.html',
                    controller: 'demoFullTextCtrl'
                }
            }
        },
        title: '全文字识别'
    };
    routers['demo.silentLive'] = {
        state: 'demo.silentLive',
        config: {
            url: '/silentLive',
            views: {
                '@': routers.demo.config.views['@'],
                'subView@demo.silentLive': {
                    templateUrl: 'tpls/demo/silentLive.html',
                    controller: 'demoSilentLiveCtrl'
                }
            }
        },
        title: '静默活体检测'
    };
    routers.doc = {
        state: 'doc',
        config: {
            url: '/doc',
            templateUrl: 'tpls/doc.html',
            controller: 'docCtrl'
        },
        title: '开发接入'
    };
    routers.price = {
        state: 'price',
        config: {
            url: '/price',
            templateUrl: 'tpls/price.html',
            controller: 'priceCtrl'
        },
        title: '价格方案'
    };
    routers.accessGuide = {
        state: 'accessGuide',
        config: {
            url: '/accessGuide',
            templateUrl: 'tpls/accessGuide.html'
        },
        title: '接入指南'
    };
    routers.APIDoc = {
        state: 'APIDoc',
        config: {
            url: '/APIDoc',
            templateUrl: 'tpls/APIDoc.html'
        },
        title: 'API 文档'
    };
    routers.SDKDownload = {
        state: 'SDKDownload',
        config: {
            url: '/SDKDownload',
            templateUrl: 'tpls/SDKDownload.html'
        },
        title: 'SDK 下载'
    };
    routers.contact = {
        state: 'contact',
        config: {
            url: '/contact',
            templateUrl: 'tpls/contact.html',
            controller: 'contactCtrl'
        },
        title: '联系我们'
    };
    routers.FAQ = {
        state: 'FAQ',
        config: {
            url: '/FAQ',
            templateUrl: 'tpls/FAQ.html'
        },
        title: '常见问题'
    };
    var mpsApp = angular.module('mpsApp', ['ui.router', 'ui.router.state.events', 'mpsCtrls', 'mpsDirectives', 'mpsSrvs', 'mpsFilters', 'ngSanitize'])
        .config(['$urlRouterProvider', '$stateProvider', '$compileProvider', function($urlRouterProvider, $stateProvider, $compileProvider) {
            $stateProvider
                .state(routers.index.state, routers.index.config)
                .state(routers.overview.state, routers.overview.config)
                .state(routers.demo.state, routers.demo.config)
                .state(routers['demo.face'].state, routers['demo.face'].config)
                .state(routers['demo.idCard'].state, routers['demo.idCard'].config)
                .state(routers['demo.creditCard'].state, routers['demo.creditCard'].config)
                .state(routers['demo.vat'].state, routers['demo.vat'].config)
                .state(routers['demo.finSta'].state, routers['demo.finSta'].config)
                .state(routers['demo.busLis'].state, routers['demo.busLis'].config)
                .state(routers['demo.fullText'].state, routers['demo.fullText'].config)
                .state(routers['demo.silentLive'].state, routers['demo.silentLive'].config)
                .state(routers.doc.state, routers.doc.config)
                .state(routers.price.state, routers.price.config)
                .state(routers.accessGuide.state, routers.accessGuide.config)
                .state(routers.APIDoc.state, routers.APIDoc.config)
                .state(routers.SDKDownload.state, routers.SDKDownload.config)
                .state(routers.contact.state, routers.contact.config)
                .state(routers.FAQ.state, routers.FAQ.config);

            $urlRouterProvider
                .when('', '/')
                .otherwise('/');

            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|fil‌​e|blob|ftp|mailto|ch‌​rome-extension):/);
        }])
        .run(['$rootScope', '$state', '$stateParams', '$window', '$location', '$anchorScroll', function($rootScope, $state, $stateParams, $window, $location, $anchorScroll) {
            $rootScope.routers = routers;
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                $rootScope.spinnerShow = true;
            });
            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                $window.setTimeout(function() {
                    $rootScope.spinnerShow = false;
                    $rootScope.$apply('spinnerShow');
                }, 500);
                // 默认人脸识别
                if ($state.current.name === 'demo') {
                    $state.go('demo.face');
                }
                // 修改标题，按“子页面 - 页面 - 微模式”格式拼接
                if ($state.current.name === 'index') {
                    $rootScope.title = "微模式";
                } else {
                    var strArr = [];
                    var propArr = $state.current.name.split('.');
                    var tmpArr = [];
                    for (var i = 0; i < propArr.length; i++) {
                        tmpArr.push(propArr[i]);
                        strArr.unshift(' - ');
                        strArr.unshift(routers[tmpArr.join('.')].title);
                    }
                    strArr.push('微模式');
                    $rootScope.title = strArr.join('');
                }
                // 跳到顶部，解决加载内容页面长度变化导致的位置变化
                if (!$window.sessionStorage.getItem('anchor')) {
                    $anchorScroll('main');
                }
            });
        }]);
})(window.angular);

(function(angular) {
    'use strict';
    var version = '1.0.16';
    var mpsCtrls = angular.module('mpsCtrls', [])

        .controller('mainCtrl', ['$scope', '$rootScope', '$window', function($scope, $rootScope, $window) {
            // 版本改变时清除 localStorage
            if (window.localStorage.getItem('version') !== version) {
                window.localStorage.clear();
                window.localStorage.setItem('version', version);
            }
            // 在 sessionStorage 产生 32 位随机码
            if (!$window.sessionStorage.getItem('visitorFlag')) {
                $window.sessionStorage.setItem('visitorFlag', Math.random().toString(36).substring(2));
            }
            $rootScope.docMode = false;
        }])

        .controller('indexCtrl', ['$scope', function($scope) {
            // $rootScope.docMode = false;
            // 配置轮播图切换时长
            $scope.$on('$viewContentLoaded', function() {
                $('.carousel').carousel({
                    interval: 5000
                })
            });

        }])

        .controller('loginCtrl', ['$scope', '$rootScope', '$http', '$element', '$window', 'Api', 'DataSrv', function($scope, $rootScope, $http, $element, $window, Api, DataSrv) {

            // 在 cookie 中设置 uuid
            if (!(/uuid\=/.test(document.cookie)) || !$window.localStorage.getItem('uuid')) {
                $window.localStorage.setItem('uuid', DataSrv.uuid());
                document.cookie = 'uuid=' + $window.localStorage.getItem('uuid');
            }


            // 获取登录状态
            $http({
                    method: 'POST',
                    url: Api.loginStatus,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: "uuid=" + $window.localStorage.getItem('uuid')
                })
                .then(function(res) {
                    if (res.data.status === "success") {
                        $scope.isLogin = true;
                        $scope.userName = res.data.userName;
                    } else {
                        $scope.isLogin = false;
                        $scope.userName = '';
                    }
                    // 是否开启价格方案页面
                    if (res.data.onlinePayFlag === 'Y') {
                        $rootScope.payOpen = true;
                    } else {
                        $rootScope.payOpen = false;
                    }
                });

            var $hideForm = $element.find('#hideForm');

            // 设置隐藏表单的值
            $scope.uuidVal = $window.localStorage.getItem('uuid');

            // 修改 action 为登录 api
            $scope.login = function() {
                $scope.action = Api.login;
            };

            // 修改 action 为注册 api
            $scope.regist = function() {
                $scope.action = Api.regist;
            };

            // 手动触发表单的提交行为
            $scope.trigAct = function(target) {
                $hideForm.trigger('submit');
            };

            // 登出
            $scope.logout = function() {
                $http({
                        method: 'POST',
                        url: Api.logout,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        data: "uuid=" + $window.localStorage.getItem('uuid')
                    })
                    .then(function(res) {
                        console.log(res);
                        if (res.data.status === 'success') {
                            $window.location.reload();
                        }
                    });
            };
        }])

        .controller('overviewCtrl', ['$window', '$scope', function($window, $scope) {
            // 设置锚点
            $scope.setAnchor = function(anchor) {
                $window.sessionStorage.setItem('anchor', anchor);
            };
        }])

        .controller('demoCtrl', ['$scope', '$timeout', '$element', '$window', '$rootScope', '$state', 'Texts', function($scope, $timeout, $element, $window, $rootScope, $state, Texts) {

            // 描述文本
            var demoTexts = Texts.demoTexts;

            // 单张 / 批量，默认单张
            $scope.mode = { value: 'single' };

            $scope.$on('$viewContentLoaded', function() {
                // 更新描述文本
                $scope.demoText = demoTexts[$state.current.name];
                // 营业执照开启版面选择
                $scope.allowTemplateSel = ($state.current.name === 'demo.busLis');
                // 增值税发票和营业执照开启识别域配置
                $scope.allowFieldConf = ($state.current.name === 'demo.vat' || $state.current.name === 'demo.busLis');
                // state 判断
                $scope.isFace = ($state.current.name === 'demo.face');
                $scope.isIdCard = ($state.current.name === 'demo.idCard');
                $scope.isCreditCard = ($state.current.name === 'demo.creditCard');
                $scope.isVat = ($state.current.name === 'demo.vat');
                $scope.isFinSta = ($state.current.name === 'demo.finSta');
                $scope.isBusLis = ($state.current.name === 'demo.busLis');
                $scope.isFullText = ($state.current.name === 'demo.fullText');
                $scope.isSilentLive = ($state.current.name === 'demo.silentLive');
                // 特定状态下不开启批量（人脸，全文识别）
                $scope.allowModeSel = !($scope.isFace || $scope.isFullText || $scope.isSilentLive);

            });

            // 二级导航可滑动
            var winW = $(window).width();
            var $tabTits = $element.find('.tab-tits ul');
            var $lis = $tabTits.find('li');
            var width = 0;
            // 计算二级导航长度
            $lis.each(function(i, v) {
                width += $(v).width();
            });
            // 屏幕比二级导航长度短才执行
            if (winW < width) {
                // 设置长度
                $tabTits.width(width + 15);
                // 修正溢出屏幕的 .active
                var revise = function(obj) {
                    if (obj && obj.length) {
                        if (obj.offset().left + obj.width() > winW) {
                            deltaX += (winW - (obj.offset().left + obj.width()));
                        } else if (obj.offset().left < 0) {
                            deltaX -= obj.offset().left;
                        }
                        $tabTits.css('transition', 'transform .3s');
                        $tabTits.css('transform', 'translate(' + deltaX + 'px)');
                    }
                };
                // 最大滚动距离
                var maxDistance = winW - $tabTits.width();
                var startX = 0,
                    endX = 0,
                    deltaX = 0;
                $tabTits.on('touchstart', function(e) {
                    startX = e.touches[0].clientX - deltaX;
                    // 取消过渡避免移动迟滞
                    $tabTits.css('transition', '');
                });
                $tabTits.on('touchmove', function(e) {
                    deltaX = e.touches[0].clientX - startX;
                    if (deltaX > 0) {
                        deltaX = deltaX / 5;
                    } else if (deltaX < maxDistance) {
                        deltaX = maxDistance + ((deltaX - maxDistance) / 5);
                    }
                    $tabTits.css('transform', 'translate(' + deltaX + 'px)');
                });
                $(window).on('touchend', function(e) {
                    endX = e.changedTouches[0].clientX;
                    deltaX = endX - startX;
                    if (deltaX > 0) {
                        deltaX = 0;
                    }
                    if (deltaX < maxDistance) {
                        deltaX = maxDistance;
                    }
                    $tabTits.css('transition', 'transform .3s');
                    $tabTits.css('transform', 'translate(' + deltaX + 'px)');
                });
                // 过渡结束时取消过渡
                $tabTits.on('transitionend', function() {
                    $tabTits.css('transition', '');
                });
                // 点击移动到屏幕以内
                $tabTits.find('li').on('click', function(e) {
                    var $target = $(e.currentTarget);
                    revise($target);
                });
                // 载入后修正位置(待优化)
                var delay = function() {
                    $timeout(function() {
                        var $active = $element.find('li.active');
                        if ($active.length) {
                            revise($active);
                        } else {
                            delay();
                        }
                    }, 0, false);
                };
                delay();
            }
            // 设置 canvas 宽高(待优化)
            $timeout(function() {
                $scope.canvasWidth = $element.find('.main-img').width();
                $scope.canvasHeight = $element.find('.main-img').height();
                $element.find('.thumb-list').append('<li class="thumb-item"></li>');
                $scope.thumbWidth = $element.find('.thumb-item').width();
                $scope.thumbHeight = $element.find('.thumb-item').height();
                $element.find('.thumb-list .thumb-item').remove();
                $scope.$apply('canvasWidth', 'canvasHeight', 'thumbWidth', 'thumbHeight');
            }, 100, false);
        }])

        .controller('demoFaceCtrl', ['$scope', '$rootScope', '$window', '$timeout', '$element', 'FileSrv', '$http', 'Api', 'NetSrv', 'UI', '$state', function($scope, $rootScope, $window, $timeout, $element, FileSrv, $http, Api, NetSrv, UI, $state) {

            // 数据列表
            $scope.dataList = [{
                file: [],
                base64: []
            }, {
                file: [],
                base64: []
            }];
            // 选定的图片索引
            $scope.activeIndex = [0, 0];
            // 相似度
            $scope.simi = '';

            var postData = { visitorFlag: $window.sessionStorage.getItem('visitorFlag') };
            // 检测是否具备两张图的上传条件
            $scope.dataReady = (!!postData.img1 && !!postData.img2);

            // 数据处理程序
            var processor = function(data) {
                $scope.simi = (parseFloat(data.mpRecognition.ocrInfoList.ocrInfo.ocrResult.ucScore) * 100).toString().substr(0, 5) + '%';
            };

            // 比对程序
            $scope.compare = function() {
                if ($scope.dataReady) {
                    NetSrv.ajaxFw({
                        url: Api.face,
                        data: NetSrv.obj2QStr(postData),
                        processor: processor,
                        fail: function() {
                            UI.modalAlert({
                                title: '错误',
                                content: '识别失败'
                            });
                            $scope.simi = '';
                        },
                        failAlert: true
                    });
                }
            };


            // 文件改变时比对
            $scope.fileChanged = function(ele, index) {
                // 有文件才进行处理
                if (!ele.files.length) {
                    return
                };
                // 文件类型为图片时才处理
                if (!(/^image\/\w+$/g.test(ele.files[0].type))) {
                    return
                };
                // 渲染 canvas
                // FileSrv.canvasRender($element.find('.main-img canvas')[index], ele.files[0]);
                // 列表 repeat 完成时渲染 canvas
                /*$scope.renderThumb = function(index, subIndex) {
                    $timeout(function() {
                        FileSrv.canvasRender($element.find('.thumb-list:eq(' + index + ') .thumb-item:eq(' + subIndex + ') canvas')[0], ele.files[0]);
                    }, 0, false);
                };*/
                // 压缩图片
                FileSrv.imgCompress({
                        file: ele.files[0],
                        maxPix: 4915200, // 500w
                        maxByte: 1048576, // 1M
                        cpsRatio: 0.7
                    })
                    .then(function(cpsFile) {
                        // 接收压缩的图片转为 base64
                        FileSrv.file2base64(cpsFile)
                            .then(function(res) {
                                // 往列表添加文件
                                if ($scope.dataList[index].file.length < 5) {
                                    // 列表长度小于 5 添加
                                    $scope.dataList[index].file.push(cpsFile);
                                    $scope.dataList[index].base64.push(res);
                                    $scope.activeIndex[index] = $scope.dataList[index].file.length - 1;
                                } else {
                                    // 否则替换当前选定的
                                    $scope.dataList[index].file[$scope.activeIndex[index]] = cpsFile;
                                    $scope.dataList[index].base64[$scope.activeIndex[index]] = res;
                                }
                                // canvas 需要在数据改变完成后渲染
                                $timeout(function() {
                                    // 主预览修改
                                    FileSrv.canvasRender($element.find('.main-img canvas')[index], $scope.dataList[index].file[$scope.activeIndex[index]]);
                                    // 缩略图修改
                                    FileSrv.canvasRender($element.find('.thumb-list:eq(' + index + ') .thumb-item:eq(' + $scope.activeIndex[index] + ') canvas')[0], $scope.dataList[index].file[$scope.activeIndex[index]]);
                                }, 0, false);
                                // 修改要提交的数据
                                postData['img' + (index + 1)] = res;
                                postData['imgName' + (index + 1)] = cpsFile.name;
                                // 刷新能否上传状态
                                $scope.dataReady = (!!postData.img1 && !!postData.img2);
                                $scope.$apply('dataReady');
                                // 选择完时置空，避免下次选择相同文件时不触发 change 事件
                                // ele.value = '';
                            });
                    });
            };

            // 选择已有图片时比对
            $scope.activeChanged = function(index, subIndex) {
                // 切换当前激活索引
                $scope.activeIndex[index] = subIndex;
                // 重新渲染 canvas
                console.log($scope.dataList);
                FileSrv.canvasRender($element.find('.main-img canvas')[index], $scope.dataList[index].file[subIndex]);
                // 修改要提交的数据
                postData['img' + (index + 1)] = $scope.dataList[index].base64[subIndex];
                postData['imgName' + (index + 1)] = $scope.dataList[index].file[subIndex].name;
            };

        }])

        .controller('demoIdCardCtrl', ['$scope', '$window', 'Api', 'FileSrv', 'NetSrv', '$http', 'UI', function($scope, $window, Api, FileSrv, NetSrv, $http, UI) {

            // 数据列表
            $scope.dataList = {
                file: [],
                base64: []
            };
            // 选定的图片索引
            $scope.activeIndex = 0;
            // 大图链接，默认与选定缩略图索引对应
            $scope.imgSrc = $scope.dataList.base64[$scope.activeIndex];

            var postData = { visitorFlag: $window.sessionStorage.getItem('visitorFlag') };

            // 数据处理程序
            var processor = function(data) {
                $scope.failed = false;
                var input = data.mpRecognition.ocrInfoList.ocrInfo.ocrResult;
                var output = {};
                // 处理数据结构 [{key1: val1}, {key2: val2}] => {key1: val1, key2: val2}
                for (var i = 0; i < input.length; i++) {
                    for (var k in input[i]) {
                        output[k] = input[i][k];
                    }
                }
                $scope.result = {
                    name: output.ucName,
                    gender: output.ucSex,
                    nation: output.ucNat,
                    birth: output.ucBirth,
                    address: output.ucAddress,
                    idnum: output.ucNumber,
                    organ: output.ucIssueUint,
                    validate: output.ucValidDate
                };
            };

            // 数据出现错误的处理程序
            var fail = function(res) {
                $scope.result = {};
                $scope.message = res.mpRecognition.resMsg;
                $scope.failed = true;
            };

            // 文件改变时时识别
            $scope.fileChanged = function(ele) {
                // 有文件才进行处理
                if (!ele.files.length) return;
                if (!(/^image\/\w+$/g.test(ele.files[0].type))) return;
                // 图片转为 base64
                FileSrv.file2base64(ele.files[0])
                    .then(function(res) {
                        // 往列表添加文件
                        if ($scope.dataList.file.length < 5) {
                            // 列表长度小于 5 添加
                            $scope.dataList.file.push(ele.files[0]);
                            $scope.dataList.base64.push(res);
                            $scope.activeIndex = $scope.dataList.file.length - 1;
                        } else {
                            // 否则替换当前选定的
                            $scope.dataList.file[$scope.activeIndex] = ele.files[0];
                            $scope.dataList.base64[$scope.activeIndex] = res;
                        }
                        // 主预览设值并修改要提交的数据
                        $scope.imgSrc = res;
                        $scope.$apply('imgSrc');
                        postData.img1 = res;
                        postData.imgName1 = ele.files[0].name;
                        // 发请求
                        NetSrv.ajaxFw({
                            url: Api.idCard,
                            data: NetSrv.obj2QStr(postData),
                            processor: processor,
                            fail: fail
                        });
                        // 选择完时置空，避免下次选择相同文件时不触发 change 事件
                        // ele.value = '';
                    });

            };

            // 选择预设图片时识别
            $scope.activeChanged = function(index) {
                // 切换当前激活索引
                $scope.activeIndex = index;
                // 修改主图 src
                $scope.imgSrc = $scope.dataList.base64[$scope.activeIndex];
                // 修改要提交的数据
                postData.img1 = $scope.imgSrc;
                postData.imgName1 = $scope.dataList.file[index].name;
                NetSrv.ajaxFw({
                    url: Api.idCard,
                    data: NetSrv.obj2QStr(postData),
                    processor: processor,
                    fail: fail
                });

            };

        }])

        .controller('demoCreditCardCtrl', ['$scope', '$window', 'Api', 'FileSrv', 'NetSrv', '$http', 'UI', function($scope, $window, Api, FileSrv, NetSrv, $http, UI) {

            // 数据列表
            $scope.dataList = {
                file: [],
                base64: []
            };
            // 选定的图片索引
            $scope.activeIndex = 0;
            // 大图链接，默认与选定缩略图索引对应
            $scope.imgSrc = $scope.dataList.base64[$scope.activeIndex];

            var postData = { visitorFlag: $window.sessionStorage.getItem('visitorFlag') };

            // 数据处理程序
            var processor = function(data) {
                $scope.failed = false;
                // console.log(data);
                var input = data.mpRecognition.ocrInfoList.ocrInfo.ocrResult;
                var output = {};
                // 处理数据结构 [{key1: val1}, {key2: val2}] => {key1: val1, key2: val2}
                for (var i = 0; i < input.length; i++) {
                    for (var k in input[i]) {
                        output[k] = input[i][k];
                    }
                }
                $scope.result = {
                    cardNum: output.ucCardNum,
                    cardName: output.ucBankName
                };
            };

            // 数据出现错误的处理程序
            var fail = function(res) {
                $scope.failed = true;
                $scope.message = res.mpRecognition.resMsg;
                $scope.result = {};
            };

            // 文件改变时时识别
            $scope.fileChanged = function(ele) {
                // 有文件才进行处理
                if (!ele.files.length) return;
                if (!(/^image\/\w+$/g.test(ele.files[0].type))) return;
                // 图片转为 base64
                FileSrv.file2base64(ele.files[0])
                    .then(function(res) {
                        // 往列表添加文件
                        if ($scope.dataList.file.length < 5) {
                            // 列表长度小于 5 添加
                            $scope.dataList.file.push(ele.files[0]);
                            $scope.dataList.base64.push(res);
                            $scope.activeIndex = $scope.dataList.file.length - 1;
                        } else {
                            // 否则替换当前选定的
                            $scope.dataList.file[$scope.activeIndex] = ele.files[0];
                            $scope.dataList.base64[$scope.activeIndex] = res;
                        }
                        // 主预览设值并修改要提交的数据
                        $scope.imgSrc = res;
                        $scope.$apply('imgSrc');
                        postData.img1 = res;
                        postData.imgName1 = ele.files[0].name;
                        // 发请求
                        NetSrv.ajaxFw({
                            url: Api.creditCard,
                            data: NetSrv.obj2QStr(postData),
                            processor: processor,
                            fail: fail
                        });
                        // 选择完时置空，避免下次选择相同文件时不触发 change 事件
                        // ele.value = '';
                    });

            };

            // 选择缩略图片时识别
            $scope.activeChanged = function(index) {
                // 切换当前激活索引
                $scope.activeIndex = index;
                // 修改主图 src
                $scope.imgSrc = $scope.dataList.base64[$scope.activeIndex];
                // 修改要提交的数据
                postData.img1 = $scope.imgSrc;
                postData.imgName1 = $scope.dataList.file[index].name;
                NetSrv.ajaxFw({
                    url: Api.creditCard,
                    data: NetSrv.obj2QStr(postData),
                    processor: processor,
                    fail: fail
                });

            };
        }])

        .controller('demoVatCtrl', ['$scope', '$window', 'Api', 'Texts', 'FileSrv', 'NetSrv', 'DataSrv', '$http', 'UI', function($scope, $window, Api, Texts, FileSrv, NetSrv, DataSrv, $http, UI) {

            $scope.transText = Texts.trans.vat;

            // 数据列表
            $scope.dataList = {
                file: [],
                base64: []
            };
            // 选定的图片索引
            $scope.activeIndex = 0;
            // 大图链接，默认与选定缩略图索引对应
            $scope.imgSrc = $scope.dataList.base64[$scope.activeIndex];

            // 数据处理程序
            var processor = function(data) {
                $scope.failed = false;
                var resData = {};
                var tmp = DataSrv.dataFlat(data.mpRecognition.ocrInfoList.ocrInfo.ocrResult);
                // invoiceCode: 发票代码
                // invoiceNumber: NO
                // 将发票代码和 NO 前置
                // 此处实现过于丑陋
                for (var k in tmp) {
                    if (k === 'invoiceCode' || k === 'invoiceNumber') {
                        resData[k] = tmp[k];
                    }
                }
                for (var k in tmp) {
                    if (k !== 'invoiceCode' || k !== 'invoiceNumber') {
                        resData[k] = tmp[k];
                    }
                }
                // 拆分数据
                if (tmp.detail && tmp.detail.length) {
                    $scope.detail = tmp.detail;
                    // 分离明细域
                    delete tmp.detail;
                } else {
                    $scope.detail = null;
                }
                $scope.common = tmp;
            };

            // 数据出现错误的处理程序
            var fail = function(res) {
                $scope.failed = true;
                $scope.message = res.mpRecognition.resMsg;
                $scope.result = '';
            };

            // 获取识别域配置
            $scope.fields = Texts.getConfig();

            // 保存识别域配置
            $scope.saveConfig = function() {
                // $window.localStorage.setItem('vatFields', JSON.stringify($scope.fields));
                Texts.saveConfig($scope.fields);
            };

            // 输出已勾选的参数
            var openField = function() {
                return Texts.openField($scope.fields);
            };

            $scope.$watch('fields', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    var isEmpty = true;
                    for (var k in newVal) {
                        if (newVal[k].display && newVal[k].checked) {
                            isEmpty = false;
                        }
                    }
                    $scope.saveDisabled = isEmpty;
                }
            }, true);

            // 文件改变时时识别
            $scope.fileChanged = function(ele) {
                // 有文件才进行处理
                if (!ele.files.length) return;
                if (!(/^image\/\w+$/g.test(ele.files[0].type))) return;
                // 图片 File 转为 base64
                FileSrv.file2base64(ele.files[0])
                    .then(function(res) {
                        // 往列表添加文件
                        if ($scope.dataList.file.length < 5) {
                            // 列表长度小于 5 添加
                            $scope.dataList.file.push(ele.files[0]);
                            $scope.dataList.base64.push(res);
                            $scope.activeIndex = $scope.dataList.file.length - 1;
                        } else {
                            // 否则替换当前选定的
                            $scope.dataList.file[$scope.activeIndex] = ele.files[0];
                            $scope.dataList.base64[$scope.activeIndex] = res;
                        }
                        // 设置主预览 src
                        $scope.imgSrc = res;
                        $scope.$apply('imgSrc');
                    });
                // 发请求
                NetSrv.ajaxFw({
                    url: Api.vat,
                    headers: {
                        'Content-Type': undefined,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: FileSrv.formData({
                        myfile: ele.files[0],
                        visitorFlag: $window.sessionStorage.getItem('visitorFlag'),
                        openField: openField()
                    }),
                    processor: processor,
                    fail: fail
                });

            };

            // 选择缩略图片时识别
            $scope.activeChanged = function(index) {
                // 切换当前激活索引
                $scope.activeIndex = index;
                // 修改主图 src
                $scope.imgSrc = $scope.dataList.base64[$scope.activeIndex];
                // 发请求
                NetSrv.ajaxFw({
                    url: Api.vat,
                    headers: {
                        'Content-Type': undefined,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: FileSrv.formData({
                        myfile: $scope.dataList.file[index],
                        visitorFlag: $window.sessionStorage.getItem('visitorFlag'),
                        openField: openField()
                    }),
                    processor: processor,
                    fail: fail
                });
            };



        }])

        .controller('demoFinStaCtrl', ['$scope', '$window', 'Api', 'FileSrv', 'NetSrv', 'DataSrv', '$http', 'UI', function($scope, $window, Api, FileSrv, NetSrv, DataSrv, $http, UI) {

            // 数据列表
            $scope.dataList = {
                file: [],
                base64: []
            };
            // 选定的图片索引
            $scope.activeIndex = 0;
            // 大图链接，默认与选定缩略图索引对应
            $scope.imgSrc = $scope.dataList.base64[$scope.activeIndex];

            // 数据处理程序
            var processor = function(data) {
                $scope.failed = false;
                $scope.result = DataSrv.json2table(data.mpRecognition.ocrInfoList.ocrInfo.ocrResult);
            };

            // 数据出现错误的处理程序
            var fail = function(res) {
                $scope.failed = true;
                $scope.message = res.mpRecognition.resMsg;
                $scope.result = '';
            };

            // 文件改变时时识别
            $scope.fileChanged = function(ele) {
                // 有文件才进行处理
                if (!ele.files.length) return;
                if (!(/^image\/\w+$/g.test(ele.files[0].type))) return;
                // 图片 File 转为 base64
                FileSrv.file2base64(ele.files[0])
                    .then(function(res) {
                        // 往列表添加文件
                        if ($scope.dataList.file.length < 5) {
                            // 列表长度小于 5 添加
                            $scope.dataList.file.push(ele.files[0]);
                            $scope.dataList.base64.push(res);
                            $scope.activeIndex = $scope.dataList.file.length - 1;
                        } else {
                            // 否则替换当前选定的
                            $scope.dataList.file[$scope.activeIndex] = ele.files[0];
                            $scope.dataList.base64[$scope.activeIndex] = res;
                        }
                        // 设置主预览 src
                        $scope.imgSrc = res;
                        $scope.$apply('imgSrc');
                    });
                // 发请求
                NetSrv.ajaxFw({
                    url: Api.finSta,
                    headers: {
                        'Content-Type': undefined,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: FileSrv.formData({
                        myfile: ele.files[0],
                        visitorFlag: $window.sessionStorage.getItem('visitorFlag')
                    }),
                    processor: processor,
                    fail: fail
                });
                // 选择完时置空，避免下次选择相同文件时不触发 change 事件
                // ele.value = '';

            };

            // 选择预设图片时识别
            $scope.activeChanged = function(index) {
                // 切换当前激活索引
                $scope.activeIndex = index;
                // 修改主图 src
                $scope.imgSrc = $scope.dataList.base64[$scope.activeIndex];
                // 发请求
                NetSrv.ajaxFw({
                    url: Api.finSta,
                    headers: {
                        'Content-Type': undefined,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: FileSrv.formData({
                        myfile: $scope.dataList.file[index],
                        visitorFlag: $window.sessionStorage.getItem('visitorFlag')
                    }),
                    processor: processor,
                    fail: fail
                });
            };

            // 展开模态框
            $scope.modalOpen = function() {
                UI.modalAlert({
                    size: 'lg',
                    title: '识别结果',
                    content: $scope.result,
                    footer: false
                });
            };
        }])

        .controller('demoBusLisCtrl', ['$scope', '$window', 'Api', 'Texts', 'FileSrv', 'NetSrv', 'DataSrv', '$http', 'UI', function($scope, $window, Api, Texts, FileSrv, NetSrv, DataSrv, $http, UI) {

            // 数据列表
            $scope.dataList = [{
                file: [],
                base64: []
            }, {
                file: [],
                base64: []
            }, {
                file: [],
                base64: []
            }];

            $scope.result = [];

            // 当前的 template 类型
            $scope.template = 12002;
            // 映射
            $scope.tpls = [12002, 12003, 12004];
            // 当前模板位置
            $scope.tplIndex = $scope.tpls.indexOf($scope.template);
            // template 改变时改变状态
            $scope.$watch('template', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    $scope.tplIndex = $scope.tpls.indexOf($scope.template);
                }
            });
            // 选定的图片索引
            $scope.activeIndex = [0, 0, 0];
            // 大图链接，默认与选定缩略图索引对应
            $scope.imgSrc = [$scope.dataList[0].base64[$scope.activeIndex[0]], $scope.dataList[1].base64[$scope.activeIndex[1]], $scope.dataList[2].base64[$scope.activeIndex[2]]];

            // 数据处理程序
            var processor = function(data) {
                $scope.failed = false;
                var resData = DataSrv.dataFlat(data.mpRecognition.ocrInfoList.ocrInfo.ocrResult);
                $scope.result[$scope.tplIndex] = DataSrv.objTrans(resData, transText);
            };

            $scope.message = [];
            // 数据出现错误的处理程序
            var fail = function(res) {
                $scope.failed = true;
                $scope.message[$scope.tplIndex] = res.mpRecognition.resMsg;
                $scope.result[$scope.tplIndex] = '';
            };


            // 获取识别域配置
            $scope.fields = Texts.getConfig();

            // 保存识别域配置
            $scope.saveConfig = function() {
                // $window.localStorage.setItem('vatFields', JSON.stringify($scope.fields));
                Texts.saveConfig($scope.fields);
            };

            // 输出已勾选的参数
            var openField = function() {
                return Texts.openField($scope.fields, $scope.template);
            };

            // 监听变化
            $scope.$watch('fields[template]', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    var isEmpty = true;
                    for (var k in newVal) {
                        if (newVal[k].display && newVal[k].checked) {
                            isEmpty = false;
                        }
                    }
                    $scope.saveDisabled = isEmpty;
                }
            }, true);

            // 文件改变时时比对
            $scope.fileChanged = function(ele) {
                // 有文件才进行处理
                if (!ele.files.length) return;
                if (!(/^image\/\w+$/g.test(ele.files[0].type))) return;
                // 图片 File 转为 base64
                FileSrv.file2base64(ele.files[0])
                    .then(function(res) {
                        // 往列表添加文件
                        if ($scope.dataList[$scope.tplIndex].file.length < 5) {
                            // 列表长度小于 5 添加
                            $scope.dataList[$scope.tplIndex].file.push(ele.files[0]);
                            $scope.dataList[$scope.tplIndex].base64.push(res);
                            $scope.activeIndex[$scope.tplIndex] = $scope.dataList[$scope.tplIndex].file.length - 1;
                        } else {
                            // 否则替换当前选定的
                            $scope.dataList[$scope.tplIndex].file[$scope.activeIndex] = ele.files[0];
                            $scope.dataList[$scope.tplIndex].base64[$scope.activeIndex] = res;
                        }
                        // 设置主预览 src
                        $scope.imgSrc[$scope.tplIndex] = res;
                        $scope.$apply('imgSrc');
                    });
                // 发请求
                NetSrv.ajaxFw({
                    url: Api.busLis,
                    headers: {
                        'Content-Type': undefined,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: FileSrv.formData({
                        myfile: ele.files[0],
                        template: $scope.template,
                        visitorFlag: $window.sessionStorage.getItem('visitorFlag'),
                        openField: openField()
                    }),
                    processor: processor,
                    fail: fail
                });
                // 选择完时置空，避免下次选择相同文件时不触发 change 事件
                // ele.value = '';
            };

            // 选择预设图片时识别
            $scope.activeChanged = function(pIndex, index) {
                $scope.activeIndex[pIndex] = index;
                $scope.imgSrc[pIndex] = $scope.dataList[pIndex].base64[index];
                // 发请求
                NetSrv.ajaxFw({
                    url: Api.busLis,
                    headers: {
                        'Content-Type': undefined,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: FileSrv.formData({
                        myfile: $scope.dataList[pIndex].file[index],
                        template: $scope.template,
                        visitorFlag: $window.sessionStorage.getItem('visitorFlag'),
                        openField: openField()
                    }),
                    processor: processor,
                    fail: fail
                });
            };
        }])

        .controller('demoFullTextCtrl', ['$scope', 'NetSrv', 'Api', 'FileSrv', '$window', function($scope, NetSrv, Api, FileSrv, $window) {
            // 数据列表
            $scope.dataList = [];
            // 选定的图片索引
            $scope.activeIndex = 0;

            // 数据处理程序
            var processor = function(res) {
                $scope.failed = false;
                $scope.dataList[$scope.activeIndex].result = res;

            };

            // 数据出现错误的处理程序
            var fail = function(res) {
                $scope.failed = true;
                $scope.dataList[$scope.activeIndex].result = res;

            };

            // 文件改变时识别
            $scope.fileChanged = function(ele) {
                // 有文件、且为图片或 pdf 才进行处理
                if (!ele.files.length || !(/(image)|(pdf)/g.test(ele.files[0].type))) {
                    return
                };

                // 队列对象
                var item = {
                    file: ele.files[0],
                    src: $window.URL.createObjectURL(ele.files[0])
                };
                // 往列表添加文件
                if ($scope.dataList.length < 5) {
                    // 列表长度小于 5 添加
                    $scope.dataList.push(item);
                    $scope.activeIndex = $scope.dataList.length - 1;
                } else {
                    // 否则替换当前选定的
                    $scope.dataList[$scope.activeIndex] = item;
                }

                // 刷新 vm
                $scope.$apply('dataList');

                // 发请求
                NetSrv.ajaxFw({
                    url: Api.fullText,
                    headers: {
                        'Content-Type': undefined,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: FileSrv.formData({
                        myfile: ele.files[0],
                        visitorFlag: $window.sessionStorage.getItem('visitorFlag')
                    }),
                    processor: processor,
                    fail: fail
                });

            };

            // 选择缩略图时切换当前激活索引
            $scope.activeChanged = function(index) {
                // 切换当前激活索引
                $scope.activeIndex = index;
            };
        }])

        .controller('demoSilentLiveCtrl', ['$scope', '$window', 'NetSrv', 'Api', function($scope, $window, NetSrv, Api) {
            // 初始化数据
            $scope.data = {
                files: [],
                src: [],
                result: null,
                status: 0 // 0: 未识别; 1： 已识别
            };

            var addImg = function(file) {
                // 列表长度小于 3 往列表添加文件
                if ($scope.data.files.length < 3) {
                    $scope.data.files.push(file);
                    $scope.data.src.push($window.URL.createObjectURL(file));
                }
                // 刷新 vm
                $scope.$apply('data');
                console.log($scope.data);
            };

            // 相机取图时添加
            $scope.capture = function(file) {
                addImg(file);
            };

            // 文件改变时添加
            $scope.fileChanged = function(ele) {
                // 有文件、且为图片才进行处理
                if (!ele.files.length || !(/image\/\w+/g.test(ele.files[0].type))) {
                    return;
                };

                // 列表长度小于 3 往列表添加文件
                addImg(ele.files[0]);
            };

            $scope.resultMap = {
                '1': '攻击样本',
                '2': '活体'
            }

            // 成功回调
            var processor = function(res) {
                $scope.data.result = res;
                $scope.failed = false;
                // 改变状态为已识别
                $scope.data.status = 1;
            };

            // 失败回调
            var fail = function(res) {
                $scope.data.result = res;
                $scope.failed = true;
                // 改变状态为已识别
                $scope.data.status = 1;
            };

            // 识别请求发送
            $scope.reco = function() {
                // 生成 formData
                var formData = new FormData();
                formData.append('visitorFlag', $window.sessionStorage.getItem('visitorFlag'));
                formData.append('imgFiles', $scope.data.files[0]);
                formData.append('imgFiles', $scope.data.files[1]);
                formData.append('imgFiles', $scope.data.files[2]);

                NetSrv.ajaxFw({
                    url: Api.silentLive,
                    headers: {
                        'Content-Type': undefined,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: formData,
                    processor: processor,
                    fail: fail
                });
            };

            // 重置 vm 状态
            $scope.reset = function() {
                $scope.data.files.length = 0;
                $scope.data.src.length = 0;
                $scope.data.result = null;
                $scope.data.status = 0;
                $scope.failed = false;
            };

        }])

        .controller('demoBatchCtrl', ['$scope', 'Api', 'UI', '$http', 'FileSrv', 'DataSrv', '$state', 'Texts', function($scope, Api, UI, $http, FileSrv, DataSrv, $state, Texts) {
            $scope.dataList = [];
            $scope.activeIndex = 0;
            $scope.activeSubIndex = 0;
            $scope.isLoading = false;
            $scope.isFullView = false;
            $scope.isAdd = false;

            // 最多上传的图片数量
            var maxLength = 4;

            // 创建队列，添加图片
            $scope.fileChanged = function(ele) {
                // 未选择文件停止
                if (!ele.files.length) return;

                var fileList = [];
                Array.prototype.push.apply(fileList, ele.files);

                // 长度超过 4 ，截取前四张
                if (ele.files.length > maxLength) {
                    fileList = fileList.slice(0, maxLength);
                    UI.toast('单次最多识别 ' + maxLength + ' 张图片', 5000);
                }

                // 当前数据构造器
                var CurrentData = function(obj) {
                    this.files = obj.files;
                    this.src = obj.src;
                    // 缩略图列表
                    this.subThumbs = (function() {
                        var tmpArr = [];
                        for (var i = 0; i < obj.files.length; i++) {
                            tmpArr.push(window.URL.createObjectURL(obj.files[i]));
                        }
                        return tmpArr;
                    })();
                    // 公共表头
                    var hasDetail;
                    Object.defineProperty(this, 'commonHead', {
                        get: function() {
                            var tmpArr = [];
                            if (!this.result || !this.result.ocrInfoList || !this.result.ocrInfoList.length) {
                                return tmpArr;
                            }
                            var ocrInfoList = this.result.ocrInfoList;
                            for (var i = 0; i < ocrInfoList.length; i++) {
                                var ocrResult = ocrInfoList[i].ocrInfo.ocrResult || [];
                                for (var k in ocrResult) {
                                    if (tmpArr.indexOf(k) === -1) {
                                        tmpArr.push(k);
                                    }
                                }
                            }
                            // 删除明细
                            if (tmpArr.indexOf('detail') !== -1) {
                                hasDetail = true;
                                tmpArr.splice([tmpArr.indexOf('detail')], 1);
                            }
                            return tmpArr;
                        }
                    });
                    // 是否含有 detail
                    Object.defineProperty(this, 'hasDetail', {
                        get: function() {
                            // 触发 detail 检测
                            this.commonHead;
                            return hasDetail;
                        }
                    });
                };

                // 当前数据
                var currentData = new CurrentData({
                    files: fileList,
                    src: window.URL.createObjectURL(fileList[0])
                });

                // 长度在 5 以内添加，为 5 覆盖
                if ($scope.dataList.length > 4) {
                    $scope.dataList[$scope.activeIndex] = currentData;
                } else {
                    $scope.dataList.push(currentData);
                    $scope.activeIndex = $scope.dataList.length - 1;
                }

                upload(currentData.files);

                // 刷新数据
                $scope.$apply('dataList');

                // 清除文件列表
                // ele.value = '';

            };

            // 在队列中添加图片
            $scope.addItem = function(ele) {
                // 未选退出
                if (!ele.files.length) return;

                // 设置 add 状态，用以和创建区分
                $scope.isAdd = true;

                // 还可添加的数量
                var maxAdd = maxLength - $scope.dataList[$scope.activeIndex].files.length;

                // 移动 FileList 实例对象到数组用以截取
                var fileList = [];
                Array.prototype.push.apply(fileList, ele.files);

                // 长度超过可添加数量，自动截取
                if (ele.files.length > maxAdd) {
                    fileList = fileList.slice(0, maxAdd);
                    UI.toast('此次最多可添加 ' + maxAdd + ' 张图片', 5000);
                }

                // 当前数据
                var currentData = {
                    files: fileList,
                    src: window.URL.createObjectURL(fileList[0]),
                    subThumbs: (function() {
                        var tmpArr = [];
                        for (var i = 0; i < fileList.length; i++) {
                            tmpArr.push(window.URL.createObjectURL(fileList[i]));
                        }
                        return tmpArr;
                    })()
                };

                // 将本次添加的数据推送至队列
                Array.prototype.push.apply($scope.dataList[$scope.activeIndex].files, currentData.files);
                Array.prototype.push.apply($scope.dataList[$scope.activeIndex].subThumbs, currentData.subThumbs);

                // 选定到最后添加的项
                $scope.activeSubIndex = $scope.dataList[$scope.activeIndex].files.length - 1;

                // 调用通用上传方法
                upload(currentData.files)
                    .then(function() {
                        $scope.isAdd = false;
                    });

                currentData = null;

                // 清除文件列表
                // ele.value = '';

                $scope.$apply('dataList');
            };

            $scope.changeIndex = function(index) {
                // 点击当前已选定不响应
                if (index === $scope.activeIndex) return;
                // 改变选定
                $scope.activeIndex = index;
                // 重置子选定
                $scope.activeSubIndex = 0;
            };

            $scope.changeSubIndex = function(subIndex) {
                // 点击当前已选定不响应
                if (subIndex === $scope.activeSubIndex) return;
                // 改变子选定
                $scope.activeSubIndex = subIndex;
            };

            $scope.remove = function(subIndex) {
                // 移除文件
                $scope.dataList[$scope.activeIndex].files.splice(subIndex, 1);
                // 移除缩略图
                $scope.dataList[$scope.activeIndex].subThumbs.splice(subIndex, 1);
                // 移除结果
                $scope.dataList[$scope.activeIndex].result.ocrInfoList.splice(subIndex, 1);

                console.log($scope.dataList);
                // 退出 fullView
                $scope.isFullView = false;
                // 如果长度为空，删除此队列
                if (!$scope.dataList[$scope.activeIndex].files.length) {
                    $scope.dataList.splice($scope.activeIndex, 1);
                    if ($scope.activeIndex >= $scope.dataList.length) {
                        $scope.activeIndex = $scope.dataList.length - 1;
                    }
                    return;
                }
                // 如果首张图片被删除，重新生成缩略图链接
                if (!subIndex) {
                    $scope.dataList[$scope.activeIndex].src = window.URL.createObjectURL($scope.dataList[$scope.activeIndex].files[0]);
                }
                // 修正选定
                if ($scope.activeSubIndex >= $scope.dataList[$scope.activeIndex].files.length) {
                    $scope.activeSubIndex = $scope.dataList[$scope.activeIndex].files.length - 1;
                }
            };

            $scope.fullView = function(subIndex) {
                // 开启 fullView
                $scope.isFullView = true;
            };

            $scope.gridView = function() {
                // 退出 fullView
                $scope.isFullView = false;
            };

            // 获取状态名，用以判断例外处理分支
            var routeName = $state.current.name;
            $scope.currSrv = routeName.split('demo.')[1];
            $scope.transText = Texts.trans;

            // 在营业执照状态开启 template
            if (routeName === 'demo.busLis') {
                $scope.template = 12002;
                // 临时存储每个 template
                var toggleData = {
                    '12002': [],
                    '12003': [],
                    '12004': []
                }
            }

            // 切换 tab 时切换数据
            $scope.changeTemplate = function(tplId) {
                // 上传时不允许切换
                if ($scope.isLoading) {
                    return;
                }
                // 关闭打开的项目
                $scope.gridView();
                // 存当前数据
                toggleData[$scope.template] = $scope.dataList;
                // 取目标数据
                $scope.dataList = toggleData[tplId];
                // 同步 template
                $scope.template = tplId;
            };

            var serviceType = {
                'demo.face': '7',
                'demo.idCard': '3',
                'demo.creditCard': '2',
                'demo.vat': '5',
                'demo.finSta': '6',
                'demo.busLis': '4'
            };

            // 获取识别域配置
            $scope.fields = Texts.getConfig();

            // 保存识别域配置
            $scope.saveConfig = function() {
                Texts.saveConfig($scope.fields);
            };

            // 输出已勾选的参数
            var openField = function() {
                return Texts.openField($scope.fields, $scope.template);
            };

            // 区分营业执照与增值税识别域显示对象
            $scope.fieldsView = ($scope.template && routeName === 'demo.busLis') ? $scope.fields[$scope.template] : $scope.fields;

            $scope.$watch('template', function(nv, ov) {
                if (nv !== ov) {
                    $scope.fieldsView = ($scope.template && routeName === 'demo.busLis') ? $scope.fields[$scope.template] : $scope.fields;
                }
            });

            // 区分营业执照与增值税监听对象
            var watchStr = ($scope.template && routeName === 'demo.busLis') ? 'fields[template]' : 'fields';

            // 监听变化
            $scope.$watch(watchStr, function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    var isEmpty = true;
                    for (var k in newVal) {
                        if (newVal[k].display && newVal[k].checked) {
                            isEmpty = false;
                        }
                    }
                    $scope.saveDisabled = isEmpty;
                }
            }, true);

            /**
             * 批量识别通用 http 请求处理方法
             * @param  {Array} files    File 实例对象组成的数组
             * @return {Promise}        Promise 对象，处理 http 请求后的动作
             */
            function upload(files) {
                var data = {
                    serviceType: serviceType[routeName],
                    template: $scope.template || '',
                    responseType: 0,
                    sequence: DataSrv.uuid(),
                    visitorFlag: window.sessionStorage.getItem('visitorFlag'),
                    openField: openField()
                };

                var formData = new FormData();

                // 先添加字符串参数
                for (var k in data) {
                    formData.append(k, data[k]);
                }

                // 再添加文件列表
                for (var i = 0; i < files.length; i++) {
                    formData.append('imgFile', files[i]);
                }

                // 开启载入层
                $scope.isLoading = true;

                return ($http({
                        method: 'POST',
                        url: Api.batch,
                        transformRequest: angular.identity,
                        uploadEventHandlers: {
                            progress: function(e) {
                                // 本次文件数量
                                $scope.totalCount = files.length;
                                // 已上传数量
                                var loadedCount = 0;
                                var fileSize = 0;
                                for (var i = 0; i < files.length; i++) {
                                    fileSize += files[i].size;
                                    if (fileSize < e.loaded) {
                                        loadedCount++;
                                    } else {
                                        break;
                                    }
                                }
                                $scope.loadedCount = loadedCount;
                            }
                        },
                        data: formData,
                        headers: { 'Content-Type': undefined }
                    })
                    .then(function(res) {

                            // 修改身份证的 isValid 值
                            (function() {
                                if (routeName === 'demo.idCard') {
                                    var tmp = res.data.mpRecognition.ocrInfoList;
                                    for (var i = 0; i < tmp.length; i++) {
                                        console.log(tmp[i]);
                                        for (var k in tmp[i].ocrInfo.ocrResult) {
                                            if (k === 'isValid') {
                                                tmp[i].ocrInfo.ocrResult[k] = ['是', '否'][tmp[i].ocrInfo.ocrResult[k]];
                                            }
                                        }
                                    }
                                }
                            })();


                            if ($scope.isAdd) {
                                Array.prototype.push.apply($scope.dataList[$scope.activeIndex].result.ocrInfoList, res.data.mpRecognition.ocrInfoList);
                            } else {
                                $scope.dataList[$scope.activeIndex].result = res.data.mpRecognition;
                            }

                            var ocrInfoList = $scope.dataList[$scope.activeIndex].result.ocrInfoList;

                            if (routeName === 'demo.finSta') {

                                $scope.isfinSta = true;

                            } else {

                                $scope.isfinSta = false;

                            }

                            console.log($scope.dataList);
                        },
                        function(err) {
                            console.log(err);
                            UI.toast('请求失败，请检查网络连接。');
                        })
                    .then(function() {
                        $scope.isLoading = false;
                    })
                );
            }
        }])

        .controller('docCtrl', ['$window', '$location', '$rootScope', '$anchorScroll', function($window, $location, $rootScope, $anchorScroll) {
            // 跳转锚点，值是从 overview 服务形式设置来的
            var anchor = $window.sessionStorage.getItem('anchor');
            if (anchor) {
                $anchorScroll(anchor);
            }
            // 清空锚点值，避免来自其他页面也会跳锚点
            $window.sessionStorage.removeItem('anchor');
        }])

        .controller('priceCtrl', ['$scope', '$http', 'Api', function($scope, $http, Api) {
            $scope.current = {
                storageApiTab: 0,
                priceTab: 0
            };
            $scope.storageTrans = {
                '23': '存储空间（GB）',
                '3': '存储空间（月）'
            };
            $http.get(Api.price.feesPerTime)
                .then(function(res) {
                    if (res.status === 200 && res.data) {
                        $scope.perTime = res.data;
                    }
                });
            $http.get(Api.price.feesPerMonth)
                .then(function(res) {
                    if (res.status === 200 && res.data) {
                        $scope.perMonth = res.data;
                    }
                });
            $http.get(Api.price.feesPerYear)
                .then(function(res) {
                    if (res.status === 200 && res.data) {
                        $scope.perYear = res.data;
                    }
                });
            $http.get(Api.price.imageStorage)
                .then(function(res) {
                    if (res.status === 200 && res.data) {
                        $scope.imageStorage = res.data;
                    }
                });
        }])

        .controller('contactCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
            $scope.current = 0;
            // $rootScope.docMode = true;
        }]);
})(window.angular);
(function($) {
    // 二级导航固定
    $(window).on('scroll', function() {
        if ($('.tab-tits')[0] && $(window).scrollTop() > $('.mps-navbar').height()) {
            $('.tab-tits').addClass('fixed');
            $('body').css('marginTop', $('.mps-navbar').height() + 'px');
        } else {
            $('.tab-tits').removeClass('fixed');
            $('body').css('marginTop', '');
        }
    });
    // canvas 宽高占满父容器
    /*$(window).on('resize', function() {
        $('.demo canvas').prop('width', $('.demo canvas').parent().width()).prop('height', $('.demo canvas').parent().height());
    });*/
})(window.jQuery);
(function(angular) {
    var mpsDirectives = angular.module('mpsDirectives', [])
        .directive('modalAlert', [function() {
            return {
                restrict: 'EACM',
                template: '<div class="modal fade alert-modal-lg" id="modalAlert" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" ng-class="modal.alert.size"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel" ng-bind="modal.alert.title">Modal title</h4></div><div class="modal-body" ng-bind-html="modal.alert.content"></div><div class="modal-footer" ng-if="modal.alert.footer"><button type="button" class="btn btn-primary" data-dismiss="modal">确定</button></div></div></div></div>',
                replace: true,
                link: function postLink(scope, iElement, iAttrs) {
                    // 垂直居中模态框
                    function reposition() {
                        var modal = iElement;
                        var dialog = modal.find('.modal-dialog');
                        modal.css('display', 'block');
                        // Dividing by two centers the modal exactly, but dividing by three 
                        // or four works better for larger screens.
                        dialog.css('margin-top', Math.max(0, ($(window).height() - dialog.height()) / 2));
                        modal.css('display', '');
                    }
                    // Reposition when a modal is shown
                    // iElement.on('show.bs.modal', reposition);
                    // 值改变时重新定位
                    scope.$watch('modal', function(newVal, oldVal) {
                        if (newVal !== oldVal) {
                            reposition();
                        }
                    }, true);
                    // Reposition when the window is resized
                    $(window).on('resize', function() {
                        $('.modal:visible').each(reposition);
                    });
                }
            }
        }])

        .directive('canvasSrc', ['FileSrv', function(FileSrv) {
            return {
                restrict: 'A',
                link: function(scope, element, attr) {
                    attr.$observe('canvasSrc', function(newVal, oldVal) {
                        if (newVal && newVal !== oldVal) {
                            FileSrv.canvasRender(element[0], newVal);
                        }
                    });
                }
            }
        }])

        .directive('spinner', [function() {
            return {
                restrict: 'EACM',
                template: '<div class="shade" ng-if="spinnerShow"><div class="loader"></div></div>',
                replace: true,
                link: function($rootScope) {
                    $rootScope.$watch('spinnerShow', function(newVal, oldVal) {
                        if (newVal === oldVal) return;
                        if (newVal) {
                            $('body').css({ overflow: 'hidden', paddingRight: 15 })
                        } else {
                            $('body').css({ overflow: '', paddingRight: '' })
                        }
                    });
                }
            }
        }])

        .directive('repeatFinish', [function() {
            return {
                restrict: 'A',
                link: function(scope, element, attr) {
                    console.log(scope.$index)
                    if (scope.$last == true) {
                        scope.$eval(attr.repeatFinish);
                    }
                }
            }
        }])

        .directive('docMode', ['$rootScope', function($rootScope) {
            return {
                restrict: 'A',
                link: function() {

                }
            }
        }])

        .directive('myRadio', [function() {
            return {
                restrict: 'E',
                template: function(ele, attr) {
                    var html = '<label><i class="fa" ng-class="{\'fa-circle-o\': !' + attr.ngModel + ', \'fa-dot-circle-o\': ' + attr.ngModel + '}"></i><input type="radio" class="" ng-model="' + attr.ngModel + '" name="' + attr.name + '"><label>';
                    return html;
                },
                replace: true,
                link: function(scope, element, attr) {
                    element.find('input[type=radio]').on('change', function() {
                        scope.$apply();
                        console.log(scope);
                    });
                }
            }
        }])

        .directive('cameraView', [function() {
            return {
                restrict: 'E',
                template: '<div class="camera-view"><video></video><canvas class="hidden"></canvas><div class="flash-light"></div><div class="capture" ng-if="allowcapture" ng-click="flash()"><i class="fa fa-camera"></i><div></div>',
                replace: true,
                scope: {
                    allowcapture: '=allowcapture',
                    oncapture: '=oncapture'
                },
                link: function(scope, element, attr) {
                    console.log(scope);
                    // Grab elements, create settings, etc.
                    var canvas = element.find("canvas")[0],
                        context = canvas.getContext("2d"),
                        video = element.find("video")[0],
                        videoObj = {
                            video: {
                                optional: [
                                    { minWidth: 320 },
                                    { minWidth: 640 },
                                    { minWidth: 1024 },
                                    { minWidth: 1280 },
                                    { minWidth: 1920 },
                                    { minWidth: 2560 }
                                ]
                            }
                        },
                        errBack = function(error) {
                            console.log("Video capture error: ", error.code);
                        };

                    // canvas 大小与 video 同步
                    video.onloadeddata = function() {
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                    };

                    // Put video listeners into place
                    if (navigator.getUserMedia) { // Standard
                        navigator.getUserMedia(videoObj, function(stream) {
                            video.srcObject = stream;
                            video.play();
                        }, errBack);
                    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
                        navigator.webkitGetUserMedia(videoObj, function(stream) {
                            video.src = window.webkitURL.createObjectURL(stream);
                            video.play();
                        }, errBack);
                    } else if (navigator.mediaDevices.getUserMedia) { // Firefox-prefixed
                        navigator.mediaDevices.getUserMedia(videoObj, function(stream) {
                            video.src = window.URL.createObjectURL(stream);
                            video.play();
                        }, errBack);
                    }

                    // 拍照取图
                    var flashLight = element.find('.flash-light');
                    scope.flash = function() {
                        // 触发 animation 闪光效果
                        flashLight.show();
                        // 将图像绘制到 canvas 上
                        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                        // 将 canvas 转为 blob
                        canvas.toBlob(function(blob) {
                            var file = (new File([blob], Date.now() + '.jpg', { type: 'image/jpeg', size: blob.size }));
                            scope.oncapture && scope.oncapture(file);
                        }, 'image/jpeg', .7);
                    };
                    // 动画结束后再次隐藏闪光层
                    flashLight.on('animationend', function() {
                        flashLight.hide();
                    });

                }
            }
        }]);
})(window.angular);
(function(angular) {
    var mpsFilters = angular.module('mpsFilters', [])
    // 信任表单 url 过滤器
    .filter('trusted', ['$sce', function($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        }
    }]);
})(window.angular);
(function(angular) {
    var mpsSrvs = angular.module('mpsSrvs', [])
        // 接口 URL
        .service('Api', [function() {
            // 主机名
            // this.host = 'http://r.micropattern.com';
            this.host = 'http://10.6.5.63:8099';
            // this.host = 'http://10.2.34.68:8001';
            // this.host = 'http://10.2.33.59:8080';
            // this.host = 'http://10.2.33.55:8081';
            // this.host = 'http://10.2.33.27:8080';
            // this.host = 'http://10.2.33.38:8080';
            // this.host = '';
            // 登录相关 API
            this.loginStatus = this.host + '/mycenter/getLoginStatus';
            this.login = this.host + '/mycenter/sign_in';
            this.regist = this.host + '/mycenter/sign_up';
            this.logout = this.host + '/mycenter/logout';
            // 算法演示相关 API
            this.face = this.host + '/platform/faceone';
            this.idCard = this.host + '/platform/idcard';
            this.creditCard = this.host + '/platform/bankocr';
            this.vat = this.host + '/platform/invoiceocr';
            this.finSta = this.host + '/platform/finstatementocr';
            this.busLis = this.host + '/platform/filedocr';
            this.fullText = this.host + '/platform/fullTextocr';
            this.silentLive = this.host + '/platform/livenessVerify';
            // 批量识别
            this.batch = this.host + '/platform/batch/serviceForFile';

            // 价格相关 API
            this.price = {
                imageStorage: this.host + '/order/getImageFeeList',
                feesPerTime: this.host + '/order/getFeesListAll?feesType=1',
                feesPerMonth: this.host + '/order/getFeesListAll?feesType=2',
                feesPerYear: this.host + '/order/getFeesListAll?feesType=3'
            };
        }])
        .service('Texts', ['$state', '$window', function($state, $window) {
            // 演示台的描述信息与图片
            this.demoTexts = {
                'demo.face': {
                    desc: {
                        tit: '人脸比对',
                        con: '请上传本地图片，体验微模式人脸多特征属性的检测与识别功能。'
                    },
                    app: [{
                        tit: 'VIP 客户服务',
                        img: 'images/demo/yycj01.png',
                        con: '对 VIP 客服进行自动人脸检测和比对，识别 VIP 客户信息并及时将信息推送到客户经理手持设备中，提升客户服务质量。'
                    }, {
                        tit: '在线身份验证',
                        img: 'images/demo/yycj02.png',
                        con: '对于客户现场照和身份证表面照片或联网核查照进行人脸识别和比对，实现在线身份验证，做好风险防范。'
                    }]
                },
                'demo.idCard': {
                    desc: {
                        tit: '身份证识别',
                        con: '请上传本地图片，体验微模式精准的身份证信息识别功能。'
                    },
                    app: [{
                        tit: '二代证实名验证',
                        img: 'images/demo/yycj03.png',
                        con: '识别身份证上的姓名和身份证号，发起联网核查，校验姓名和身份证号的一致性。'
                    }, {
                        tit: '远程开户',
                        img: 'images/demo/yycj04.png',
                        con: '识别一类账户银行卡表面信息，和银行业务系统对接进行校验，加快二类、三类账户的开通速度。'
                    }]
                },
                'demo.creditCard': {
                    desc: {
                        tit: '银行卡识别',
                        con: '请上传本地图片，体验快速准确的银行卡信息识别功能。'
                    },
                    app: [{
                        tit: '银行卡绑定',
                        img: 'images/demo/yycj03.png',
                        con: '快速准确地识别银行卡相关信息，用于手机银行卡绑定业务，无需手动输入银行卡号。'
                    }, {
                        tit: '证卡实名验证',
                        img: 'images/demo/yycj04.png',
                        con: '识别银行卡上的卡号以及二代证上的姓名和身份证信息，校验姓名、身份证号、银行卡号的一致性。'
                    }]
                },
                'demo.vat': {
                    desc: {
                        tit: '增值税发票识别',
                        con: '请上传本地图片，体验增值税发票识别，快速完成增值税专用发票的信息采集与结构化。'
                    },
                    app: [{
                        tit: '税务认证',
                        img: 'images/demo/yycj05.png',
                        con: '识别采集增值税发票信息，并形成电子档上传税务认证系统，进行税务认证。'
                    }, {
                        tit: '票据归档',
                        img: 'images/demo/yycj06.png',
                        con: '结构化数据导出，方便票据信息的归档。'
                    }]
                },
                'demo.finSta': {
                    desc: {
                        tit: '财报识别',
                        con: '请上传本地图片，体验财务报表识别，快速完成财务报表的信息采集与结构化。'
                    },
                    app: [{
                        tit: '财务审计',
                        img: 'images/demo/yycj05.png',
                        con: '识别财务报表信息，减少人工补录，提高财务审核效益。'
                    }, {
                        tit: '财报归档',
                        img: 'images/demo/yycj06.png',
                        con: '结构化数据导出，方便图表信息的归档。'
                    }]
                },
                'demo.busLis': {
                    desc: {
                        tit: '营业执照识别',
                        con: '请上传本地图片，体验营业执照识别，快速完成营业执照的信息采集与结构化。'
                    },
                    app: [{
                        tit: '企业证照审核',
                        img: 'images/demo/yycj07.png',
                        con: '识别企业证照信息，减少人工补录，提高对公开户等业务办理效率。'
                    }, {
                        tit: '证照归档',
                        img: 'images/demo/yycj06.png',
                        con: '证照归档—结构化数据导出，方便图像信息的归档。'
                    }]
                },
                'demo.fullText': {
                    desc: {
                        tit: '全文字识别',
                        con: '请上传本地图片，体验全文识别，快速完成资料结构化整理。'
                    },
                    app: [{
                        tit: '法院文件识别',
                        img: 'images/demo/fullText01.png',
                        con: '用于法院纸质文件识别，减少人工输入过程，提高输入效率。'
                    }, {
                        tit: '资料结构化整理',
                        img: 'images/demo/fullText02.png',
                        con: '用于笔记、书籍、档案等资料识别，方便您完成大量的资料结构化整理工作。'
                    }]
                },
                'demo.silentLive': {
                    desc: {
                        tit: '静默活体检测',
                        con: '请拍摄或上传三张图片，体验静默活体检测，识别静态图像上的生物目标是否为活体。'
                    },
                    app: [{
                        tit: '法院文件识别',
                        img: 'images/demo/fullText01.png',
                        con: '用于法院纸质文件识别，减少人工输入过程，提高输入效率。'
                    }, {
                        tit: '资料结构化整理',
                        img: 'images/demo/fullText02.png',
                        con: '用于笔记、书籍、档案等资料识别，方便您完成大量的资料结构化整理工作。'
                    }]
                }
            };

            // 识别域
            this.fields = {
                vat: {
                    "NO": {
                        name: "NO",
                        value: "NO",
                        checked: true,
                        display: true
                    },
                    "开票日期": {
                        name: "开票日期",
                        value: "date",
                        checked: true,
                        display: true
                    },
                    "购买方纳税人识别号": {
                        name: "购买方纳税人识别号",
                        value: "buyerIdentificationNumber",
                        checked: true,
                        display: true
                    },
                    "密码区": {
                        name: "密码区",
                        value: "password",
                        checked: true,
                        display: true
                    },
                    "价税合计(大写)": {
                        name: "价税合计(大写)",
                        value: "totalPriceTaxUppercase",
                        checked: true,
                        display: true
                    },
                    "价税合计(小写)": {
                        name: "价税合计(小写)",
                        value: "totalPriceTaxLowercase",
                        checked: true,
                        display: true
                    },
                    "代码区域种类": {
                        name: "代码区域种类",
                        value: "codeAreaType",
                        checked: true,
                        display: true
                    },
                    "销售方纳税人识别号": {
                        name: "销售方纳税人识别号",
                        value: "sellerIdentificationNumber",
                        checked: true,
                        display: true
                    },
                    "合计金额": {
                        name: "合计金额",
                        value: "totalAmount",
                        checked: true,
                        display: true
                    },
                    "合计税额": {
                        name: "合计税额",
                        value: "totalTax",
                        checked: true,
                        display: true
                    },
                    "名称": {
                        name: "名称",
                        value: "名称",
                        checked: false,
                        display: false
                    },
                    "规格型号": {
                        name: "规格型号",
                        value: "规格型号",
                        checked: false,
                        display: false
                    },
                    "单位": {
                        name: "单位",
                        value: "单位",
                        checked: false,
                        display: false
                    },
                    "数量": {
                        name: "数量",
                        value: "数量",
                        checked: false,
                        display: false
                    },
                    "单价": {
                        name: "单价",
                        value: "单价",
                        checked: false,
                        display: false
                    },
                    "金额": {
                        name: "金额",
                        value: "金额",
                        checked: false,
                        display: false
                    },
                    "税率": {
                        name: "税率",
                        value: "税率",
                        checked: false,
                        display: false
                    },
                    "税额": {
                        name: "税额",
                        value: "税额",
                        checked: false,
                        display: false
                    },
                    /*"价税合计金额验证": {
                        name: "价税合计金额验证",
                        value: "totalPriceVerify",
                        checked: true,
                        display: false
                    },*/
                    "购买方名称": {
                        name: "购买方名称",
                        value: "purchaserName",
                        checked: true,
                        display: true
                    },
                    "销售方名称": {
                        name: "销售方名称",
                        value: "sellerName",
                        checked: true,
                        display: true
                    },
                    "明细": {
                        name: "明细",
                        value: "detailRegion",
                        checked: true,
                        display: true
                    }
                },
                busLis: {
                    "12002": {
                        "注册号": {
                            name: "注册号",
                            value: "registrationNumber",
                            checked: true,
                            display: true
                        },
                        "编号": {
                            name: "证照编号",
                            value: "serialNumber",
                            checked: true,
                            display: true
                        },
                        "组织机构代码证号": {
                            name: "组织机构代码证号",
                            value: "OrganizationCodeCertificate",
                            checked: true,
                            display: true
                        },
                        "税务登记号": {
                            name: "税务登记号",
                            value: "taxRegistryNumber",
                            checked: true,
                            display: true
                        },
                        "统一社会信用代码": {
                            name: "统一社会信用代码",
                            value: "socialCreditCode",
                            checked: true,
                            display: true
                        },
                        "名称": {
                            name: "名称",
                            value: "businessLicenseName",
                            checked: true,
                            display: true
                        },
                        "类型/主体类型": {
                            name: "类型/主体类型",
                            value: "businessLicenseType,mainType",
                            checked: true,
                            display: true
                        },
                        "住所/营业场所/主要经营场所": {
                            name: "住所/营业场所/主要经营场所",
                            value: "address,busnissPlace,mainBusnissPlace",
                            checked: true,
                            display: true
                        },
                        "法定代表人/投资人/负责人/执行事务合伙人": {
                            name: "法定代表人/投资人/负责人/执行事务合伙人",
                            value: "legalRepresentativeName,investor,personInCharge,managingPartner",
                            checked: true,
                            display: true
                        },
                        "注册资本": {
                            name: "注册资本",
                            value: "registeredCapital",
                            checked: true,
                            display: true
                        },
                        "成立日期": {
                            name: "成立日期",
                            value: "dateOfEstablishment",
                            checked: true,
                            display: true
                        },
                        "营业期限/合伙期限": {
                            name: "营业期限/合伙期限",
                            value: "busnissTerm,partnerTerm",
                            checked: true,
                            display: true
                        }
                    },
                    "12003": {
                        "注册号": {
                            name: "注册号",
                            value: "registrationNumber",
                            checked: true,
                            display: true
                        },
                        "名称": {
                            name: "名称",
                            value: "businessLicenseName",
                            checked: true,
                            display: true
                        },
                        "法定代表人姓名": {
                            name: "法定代表人姓名",
                            value: "legalRepresentativeName",
                            checked: true,
                            display: true
                        },
                        "注册资本": {
                            name: "注册资本",
                            value: "registeredCapital",
                            checked: true,
                            display: true
                        },
                        "实收资本": {
                            name: "实收资本",
                            value: "paidUpCapital",
                            checked: true,
                            display: true
                        }
                    },
                    "12004": {
                        "注册号": {
                            name: "注册号",
                            value: "registrationNumber",
                            checked: true,
                            display: true
                        },
                        "字号名称/名称": {
                            name: "字号名称/名称",
                            value: "typeName,businessLicenseName",
                            checked: true,
                            display: true
                        },
                        "经营者姓名": {
                            name: "经营者姓名",
                            value: "managerName",
                            checked: true,
                            display: true
                        }
                    }
                }
            };

            this.getConfig = function(template) {
                var that = this;
                var stateName = $state.current.name.substr($state.current.name.indexOf('.') + 1);

                var keyName = {
                    vat: 'vatFields',
                    busLis: 'busLisFields'
                };

                return JSON.parse($window.localStorage.getItem(keyName[stateName])) || that.fields[stateName];
            };

            /*Object.defineProperties(this, {
                "getConfig": {
                    get: function(template) {
                        var that = this;
                        var stateName = $state.current.name.substr($state.current.name.indexOf('.') + 1);

                        var keyName = {
                            vat: 'vatFields',
                            busLis: 'busLisFields'
                        };

                        return JSON.parse($window.localStorage.getItem(keyName[stateName])) || that.fields[stateName];
                    }
                }
            });*/

            this.saveConfig = function(obj) {
                var stateName = $state.current.name.substr($state.current.name.indexOf('.') + 1);

                var keyName = {
                    vat: 'vatFields',
                    busLis: 'busLisFields'
                };

                $window.localStorage.setItem(keyName[stateName], JSON.stringify(obj));
            };

            this.openField = function(fields, template) {
                var tmpArr = [];

                if (template) fields = fields[template];

                for (var k in fields) {
                    if (fields[k].checked) {
                        tmpArr.push(fields[k].value);
                    }
                }
                return tmpArr.join(',');
            };

            this.trans = {
                idCard: {
                    "ucName": "姓名",
                    "ucSex": "性别",
                    "ucNat": "民族",
                    "ucBirth": "出生",
                    "ucAddress": "住址",
                    "ucNumber": "公民身份证号码",
                    "ucIssueUint": "签发机关",
                    "ucValidDate": "有效期限",
                    "isValid": "是否过期"
                },
                creditCard: {
                    "ucCardNum": "银行卡号",
                    "ucBankName": "银行卡名"
                },
                vat: {
                    "quantity": "数量",
                    "unitPrice": "单价",
                    "price": "金额",
                    "taxRate": "税率",
                    "taxAmount": "税额",
                    "goodsOrTaxableName": "货物或应税劳务名称",
                    "specificationsModels": "规格型号",
                    "unit": "单位",
                    "date": "开票日期",
                    "invoiceCode": "发票代码",
                    "invoiceNumber": "NO",
                    "totalPrice": "合计金额",
                    "taxTotalPrice": "合计税额",
                    "buyerIdentificationNumber": "购买方纳税人识别号",
                    "sellerIdentificationNumber": "销售方纳税人识别号",
                    "password": "密码区",
                    "totalPriceTaxLowercase": "价税合计（小写）",
                    "buyerName": "购买方名称",
                    "sellerName": "销售方名称",
                    "invoiceArea": "发票区域",
                    "invoiceType": "发票种类",
                    "totalPriceTaxUppercase": "价税合计（大写）",
                    "detail": "明细",
                    "name": "名称"
                },
                busLis: {
                    "code": "代码",
                    "validity": "有效期",
                    "registrationNumber": "注册号",
                    "businessLicenseName": "名称",
                    "legalRepresentative": "法定代表人",
                    "legalRepresentativeName": "法定代表人姓名",
                    "registeredCapital": "注册资本",
                    "dateOfEstablishment": "成立日期",
                    "businessLicenseType": "类型",
                    "busnissTerm": "营业期限",
                    "serialNumber": "编号",
                    "OrganizationCodeCertificate": "组织结构代码证",
                    "typeSize": "字号",
                    "typeSizeName": "字号名称",
                    "PermitNumber": "核准号",
                    "proprietorName": "经营者姓名",
                    "ScopeOfOperators": "经营者范围",
                    "domicile": "住所",
                    "address": "地址",
                    "companyType": "公司类型",
                    "paiclupCapital": "实收资本",
                    "templateType": "版面类型",
                    "socialCreditCode": "统一社会信用代码",
                    "personInCharge": "责任人",
                    "investor": "投资人",
                    "principal": "负责人",
                    "scope": "经营范围",
                    "taxNumber": "税务登记证号"
                }
            };
        }])
        // 文件处理工具集
        .service('FileSrv', ['$window', function($window) {
            /**
             * 文件转 base64
             * @param  {File}   file  File 类型
             * @return {Promise}      返回一个 Promise 对象，调用 then 方法使用回调函数
             * e.g: file2base64(file.files[0]).then(function(res) {
             *     img.src = res;
             * })
             */
            this.file2base64 = function(file) {
                var reader = new FileReader();
                var p = (new Promise(function(resolve, reject) {
                    reader.onload = function() {
                        resolve(reader.result);
                    };
                    if (file) {
                        reader.readAsDataURL(file);
                    }
                }))
                return p;
            };

            /**
             * base64 转文件
             * @param  {String}  str 字符串类型
             * @return {File}        文件类型，文件名随机
             */
            this.base642file = function(str) {
                var bytes = $window.atob(str.split(',')[1]); //去掉url的头，并转换为byte
                //处理异常,将ascii码小于0的转换为大于0
                var ab = new ArrayBuffer(bytes.length);
                var ia = new Uint8Array(ab);
                for (var i = 0; i < bytes.length; i++) {
                    ia[i] = bytes.charCodeAt(i);
                }
                // 匹配 base64 字符串中的文件类型
                var fileType = /^data\:(.+)\;base64$/.exec(str.split(',')[0])[1];
                return new File([ab], Math.random().toString(36).substr(2) + '.' + fileType.split('/')[1], { type: fileType });
            };
            /**
             * 图片压缩
             * @param  {压缩配置} conf 图片体积尺寸压缩比参数
             * @return {Promise}       返回一个 Promise 对象，调用 then 方法使用回调函数,调函数接收一个 File 对象
             * e.g: imgCompress({
             *     file: file.siles[0],
             *     maxPix: 1920000,
             *     maxByte: 1048576,
             *     cpsRatio: 0.7
             * }).then(function(file) {
             *     ...
             * });
             */
            this.imgCompress = function(conf) {
                // 默认配置
                if (!conf.file) {
                    console.log('文件不存在！');
                }
                // 默认配置
                var defConf = {
                    file: conf.file, // 文件
                    maxPix: conf.maxPix || 1920000, // 图片压缩后的最大像素，默认 200w
                    maxByte: conf.maxByte || 1048576, // 文件最大体积，默认 1M
                    cpsRatio: conf.cpsRatio || 0.7 // 图片压缩比例，默认 70%
                };
                // 记录原始与处理后大小尺寸与压缩比
                var info = {
                    initSize: defConf.file.size, // 初始文件大小
                    initWidth: 0, // 初始宽度
                    initHeight: 0, // 初始高度
                    cpsSize: 0, // 压缩后大小
                    cpsWidth: 0, // 压缩后宽度
                    cpsHeight: 0, // 压缩后高度
                    cpsRatio: '' // 压缩比
                };
                // 初始化 canvas 与 Image
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var img = new Image();
                var reader = new FileReader();

                var p = (new Promise(function(resolve, reject) {
                    // 文件大于限制大小开始压缩
                    if (defConf.file.size > defConf.maxByte) {
                        // 回调函数接收到处理好的 File 对象
                        reader.onload = function() {
                            resolve(new File([reader.result], defConf.file.name, { type: 'image/jpeg' }));
                        };

                        (new Promise(function(resolve, reject) {
                            img.onload = resolve;
                            // 图片地址设为 blob 链接
                            img.src = $window.URL.createObjectURL(defConf.file);
                        }))
                        .then(function() {
                            // 记录原始宽高
                            info.initWidth = img.width;
                            info.initHeight = img.height;
                            // 大于最大像素则压缩尺寸
                            if ((img.width * img.height) > defConf.maxPix) {
                                // 计算压缩后尺寸与原始尺寸的比值
                                var sqrt = Math.sqrt((img.width * img.height) / defConf.maxPix);
                                // 根据比值计算分辨率并记录
                                canvas.width = info.cpsWidth = img.width / sqrt;
                                canvas.height = info.cpsHeight = img.height / sqrt;
                            } else {
                                // 否则不修改尺寸
                                canvas.width = info.cpsWidth = img.width;
                                canvas.height = info.cpsHeight = img.height;
                            }
                            // 将图片以指定宽高比绘制到画布上
                            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                            // 将 canvas 内容转为 blob
                            canvas.toBlob(function(blob) {
                                // 记录转换后的文件体积与压缩比
                                info.cpsSize = blob.size;
                                info.cpsRatio = info.cpsSize / info.initSize;
                                // 打印压缩信息
                                console.log(
                                    '初始文件大小：' + info.initSize / 1024 + 'kb\n' +
                                    '初始宽度：' + info.initWidth + 'px\n' +
                                    '初始高度：' + info.initHeight + 'px\n' +
                                    '压缩后大小：' + info.cpsSize / 1024 + 'kb\n' +
                                    '压缩后宽度：' + info.cpsWidth + 'px\n' +
                                    '压缩后高度：' + info.cpsHeight + 'px\n' +
                                    '压缩比：' + parseInt(info.cpsRatio * 100) + '%'
                                );
                                // 将 blob 转为二进制字符串供 File 构造器接收处理
                                reader.readAsArrayBuffer(blob);
                            }, 'image/jpeg', defConf.cpsRatio);
                        });


                    } else {
                        // 仅仅读取文件触发 FileReader 的 onload 事件
                        reader.onload = resolve(defConf.file);

                        console.log('图片未压缩！');

                        reader.readAsDataURL(defConf.file);
                    }
                }));



                // 返回 Promise 对象以供回调函数处理
                return p;
            };
            /**
             * 图片转 base64
             * @param  {Image} img  Image 对象
             * @return {String}     base64 字符串
             * e.g: var base64 = img2base64(document.querySelector('img'));
             */
            this.img2base64 = function(img) {
                var newImg = new Image();
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var p = (new Promise(function(resolve, reject) {
                    newImg.onload = function() {
                        canvas.width = newImg.width;
                        canvas.height = newImg.height;
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        resolve(canvas.toDataURL());
                    };
                    newImg.src = img.src;
                }));
                return p;
            };
            /**
             * 远程链接转为图片
             * @param  {String} src 链接地址
             * @return {Promise}    返回一个 Promise 对象,调用 then 方法使用回调函数,回调函数接收一个 Image 对象
             * e.g.: src2img('http://test.com/image.jpg')
             * .then(function(img) {
             *     ...
             * });
             */
            this.src2img = function(src) {
                var img = new Image();
                var p = (new Promise(function(resolve, reject) {
                    img.onload = resolve(img);
                    img.src = src;
                }));
                return p;
            };
            /**
             * 远程链接转为 base64
             * @param  {String} src 链接地址
             * @return {Promise}    返回一个 Promise 对象,调用 then 方法使用回调函数,调函数接收一个 base64 字符串
             * e.g.: src2base64('http://test.com/image.jpg')
             * .then(function(base64) {
             *     ...
             * });
             */
            this.src2base64 = function(src) {
                var that = this;
                return this.src2img(src).then(that.img2base64);
            };
            /**
             * 远程链接转为 File 类型
             * @param  {String} src 链接地址
             * @return {Promise}    返回一个 Promise 对象,调用 then 方法使用回调函数,调函数接收一个 File 对象，文件名随机
             * e.g.: src2file('http://test.com/image.jpg')
             * .then(function(base64) {
             *     ...
             * });
             */
            this.src2file = function(src) {
                var that = this;
                return this.src2base64(src)
                    .then(that.base642file);
            };

            /**
             * formData 生成
             * @param  {Object} obj 想要加入 FormData 的数据键值对
             * @return {FormData}     返回的 FormData 对象
             */
            this.formData = function(obj) {
                var formData = new FormData();
                for (var k in obj) {
                    formData.append([k], obj[k]);
                }
                return formData;
            };
            /**
             * canvas 渲染
             * @param  {Object}     要渲染的 canvas 对象
             * @param  {Object}     File 类型，想要渲染到 canvas 的图片
             * @return {FormData}   无
             */
            this.canvasRender = function(canvas, file) {
                console.dir(canvas);
                console.dir(file);
                var ctx = canvas.getContext('2d');
                var canvasWidth = canvas.width;
                var canvasHeight = canvas.height;
                var canvasWHProp = canvasWidth / canvasHeight;
                var img = new Image();
                img.src = window.URL.createObjectURL(file);
                img.onload = function() {
                    // 销毁链接
                    window.URL.revokeObjectURL(img.src);
                    var imgWidth = img.width;
                    var imgHeight = img.height;
                    var imgRenderWidth = img.width;
                    var imgRenderHeight = img.height;
                    var imgWHProp = imgWidth / imgHeight;
                    var x = 0;
                    var y = 0;
                    var width = 0;
                    var height = 0;
                    if (canvasWidth < imgWidth && canvasHeight < imgHeight) {
                        // 画布比图片小，进行缩放
                        if (canvasWHProp > imgWHProp) {
                            // 图片比例比 canvas 高，使图片高 100% ，宽度缩放
                            imgRenderHeight = canvasHeight;
                            imgRenderWidth = imgWidth * imgRenderHeight / imgHeight;
                        } else {
                            // 图片比例比 canvas 宽，使图片宽 100% ，高度缩放
                            imgRenderWidth = canvasWidth;
                            imgRenderHeight = imgHeight * imgRenderWidth / imgWidth;
                        }
                    }
                    // 定位图片
                    x = (canvasWidth - imgRenderWidth) / 2;
                    y = (canvasHeight - imgRenderHeight) / 2;
                    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                    ctx.drawImage(img, 0, 0, imgWidth, imgHeight, x, y, imgRenderWidth, imgRenderHeight);
                };
            };
        }])
        .service('NetSrv', ['$rootScope', '$http', '$window', 'UI', 'Texts', function($rootScope, $http, $window, UI, Texts) {
            /**
             * 对象转为 queryString
             * @param  {Object} obj 对象类型
             * @return {String}     字符串类型，格式：a=1&b=2&c=3
             */
            this.obj2QStr = function(obj) {
                if (typeof obj !== 'object') {
                    return;
                } else {
                    var tmpArr = [];
                    for (var k in obj) {
                        var subTmpArr = [];
                        subTmpArr.push(encodeURIComponent(k));
                        subTmpArr.push('=');
                        subTmpArr.push(encodeURIComponent(obj[k]));
                        tmpArr.push(subTmpArr.join(''));
                    }
                    return tmpArr.join('&');
                }
            };
            /**
             * 通用 Ajax 流程
             * @param  {Object} conf 配置，包含请求地址，要发送的数据，数据处理程序
             * e.g: {
                    url: '/upload', // url ,必要
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'X-Requested-With': 'XMLHttpRequest'
                    },  // 请求头，非必要
                    data: data,     // 发送的数据，非必要
                    processor: function(data){ // 数据处理程序，非必要
                        ...
                    },
                    fail: function() { // 错误处理程序，非必要
                        ...
                    },
                    failAlert: true, // 弹出错误消息，非必要，默认不提示
                    // cache: true // 是否启用缓存，如果启用，则缓存获取的数据，非必要，默认不缓存
                }
             */
            // ajax 缓存对象
            // this.ajaxCache = {};
            this.ajaxFw = function(conf) {
                if (!conf.url || !conf.data) {
                    return;
                }
                // 如果开启缓存，先从缓存里寻找数据
                // console.log(conf);
                if (conf.cache) {
                    return;
                }
                $rootScope.spinnerShow = true;

                $http({
                        method: 'POST',
                        url: conf.url,
                        headers: conf.headers || {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        data: conf.data
                    })
                    .then(function(res) {
                        if (res.data) {
                            var data = JSON.parse(res.data);
                            if (data && data.mpRecognition.resCd === '00000') {
                                conf.processor && conf.processor(data);
                            } else if (data && data.mpRecognition.resCd !== '00000') {
                                // 数据状态非成功时的动作
                                conf.fail && conf.fail(data);

                                /*if (conf.failAlert) {
                                    if (Texts.status[data.mpRecognition.resCd]) {
                                        // 弹出模态框
                                        UI.modalAlert({
                                            content: Texts.status[data.mpRecognition.resCd]
                                        });
                                    } else {
                                        UI.modalAlert({
                                            content: data.mpRecognition.resMsg
                                        });                                 
                                    }
                                }*/
                            }
                            // 隐藏载入圈
                            $rootScope.spinnerShow = false;
                        }
                    }, function(e) {
                        if (e.status === -1) {
                            UI.modalAlert({
                                title: '错误',
                                content: '数据请求失败，请检查网络连接。'
                            });
                        }
                        $rootScope.spinnerShow = false;
                    });
            };
        }])
        // 字符串处理工具集
        .service('DataSrv', [function() {
            /**
             * 生成 UUID
             * @param  {[type]} len [description]
             * @return {String}     UUID 字符串
             */
            this.uuid = function(len) {
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
                var uuid = [],
                    i;
                var radix = chars.length;

                if (len && !isNaN(len)) {
                    for (i = 0; i < len; i++) {
                        uuid[i] = chars[0 | Math.random() * radix]
                    }
                } else {
                    var r;
                    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                    uuid[14] = '4';
                    for (i = 0; i < 36; i++) {
                        if (!uuid[i]) {
                            r = 0 | Math.random() * radix;
                            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
                        }
                    }
                }
                return uuid.join('');
            };
            /**
             * 对象扁平化，将对象下的数组下的对象提升一级
             * @param  {Object} input 扁平化之前的对象
             * @return {Object}       扁平化之后的对象
             */
            this.dataFlat = function(input) {
                var output = {};
                // 处理数据结构 [{key1: val1}, {key2: val2}] => {key1: val1, key2: val2}
                for (var i = 0; i < input.length; i++) {
                    for (var k in input[i]) {
                        output[k] = input[i][k];
                    }
                }
                return output;
            };
            /**
             * 单层对象转表格
             * @param  {Object}       输入的对象，对象属性必须都为值类型
             * @return {String}       结果表格字符串
             */
            this.obj2tabRec = function(obj) {
                var output = ['<table class="table table-striped table-responsive table-hover"><tbody>'];
                for (var k in obj) {
                    output.push('<tr>');
                    output.push('<td>');
                    output.push('"_$_一_f_"');
                    output.push(k);
                    output.push('"_$_一_f_"');
                    output.push('</td>');
                    output.push('<td>');
                    output.push(obj[k]);
                    output.push('</td>');
                    output.push('</tr>');
                }
                output.push('</tbody></table>')
                return output.join('');
            };
            /**
             * json 转表格
             * @param  {Object} obj JSON.parse 后的数据对象
             * @return {String}     html 表格字符串
             */
            this.json2table = function(obj) {
                var table = obj.table;
                var tableRow = table.tableRow;
                var html = ['<table class="table table-striped"><tbody>'];
                for (var i = 0; i < tableRow.length; i++) {
                    html.push['<tr>'];
                    var tableItemList = tableRow[i].tableItem
                    for (var j = 0; j < tableItemList.length; j++) {
                        var value = tableItemList[j].value;
                        html.push('<td>');
                        html.push(value);
                        html.push('</td>');
                    }
                    html.push('</tr>');
                }
                html.push('</tbody></table>');
                return html.join('');
            };
            /**
             * 扁平的对象转表格
             * @param  {Object} obj 只有一层的对象
             * @return {String}     转换之后的 html 字符串
             */
            this.flatobj2table = function(obj) {
                var html = ['<table class="table table-striped"><tbody>'];
                for (var k in obj) {
                    html.push('<tr>');
                    html.push('<td>');
                    html.push(k);
                    html.push('</td>');
                    html.push('<td>');
                    html.push(obj[k]);
                    html.push('</td>');
                    html.push('</tr>');
                }
                html.push('</tbody></table>');
                return html.join('');
            };
            /**
             * json 转无序列表
             * 被转换的文本需要转译
             * @param  {Object} obj JSON.parse 后的数据对象
             * @return {String}     html 无序列表字符串
             */
            this.json2list = function(obj) {
                var html = [];

                function recursionObj(obj) {
                    if (typeof obj === 'string') {
                        html.push('<span>');
                        html.push(obj);
                        html.push('</span>');
                    } else if (obj instanceof Array) {
                        html.push('<ul class="arr">');
                        for (var i = 0; i < obj.length; i++) {
                            html.push('<li>');
                            recursionObj(obj[i]);
                            html.push('</li>');
                        }
                        html.push('</ul>');
                    } else if (typeof obj === 'object') {
                        html.push('<ul class="obj">');
                        for (var k in obj) {
                            html.push('<li>');
                            html.push('"_$_一_f_"');
                            html.push(k);
                            html.push('"_$_一_f_"：');
                            recursionObj(obj[k])
                            html.push('</li>');
                        }
                        html.push('</ul>');
                    }
                }
                recursionObj(obj);
                return html.join('');
            };
            /**
             * 文字替换
             * @param  {String} str      字符串类型，需要替换的文字
             * @param  {Object} transObj 对象类型，包含要替换的文本与替换文本键值对
             * @return {String}          字符串
             */
            this.textTrans = function(str, transObj) {
                for (var k in transObj) {
                    var keyName = '"\\_\\$\\_一\\_f\\_"' + k + '"\\_\\$\\_一\\_f\\_"';
                    var reg = new RegExp(keyName, 'g');
                    var rId = new RegExp('"\\_\\$\\_一\\_f\\_"', 'g');
                    str = str.replace(reg, transObj[k]);
                }
                str = str.replace(rId, '');
                return str;
            };


            this.objTrans = function(obj, transObj) {
                var that = this;
                return that.textTrans(that.obj2tabRec(obj), transObj);
            };
        }])
        .service('UI', ['$rootScope', '$timeout', function($rootScope, $timeout) {
            this.modalAlert = function(conf) {
                if (!$rootScope.modal) {
                    $rootScope.modal = {};
                }
                var defConf = {
                    size: conf.size ? 'modal-' + conf.size : '',
                    title: conf.title ? conf.title : '提示信息',
                    content: conf.content ? conf.content : '',
                    footer: conf.footer === false ? false : true
                };
                $rootScope.modal.alert = defConf;
                $timeout(function() {
                    $('#modalAlert').modal();
                }, 1000, false);
            };

            // 浮动通知             内容     销毁时间
            this.toast = function(content, time) {
                var toast = $('<div class="toast">' + (content || '') + '</div>').appendTo(document.body)
                window.setTimeout(function() {
                    toast.css('opacity', 1);
                }, 0);
                window.setTimeout(function() {
                    toast.css('opacity', 0);
                    toast.one('transitionend', function() {
                        toast.remove();
                    });
                }, (time || 3000));
            };

        }]);
})(window.angular);