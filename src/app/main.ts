/// <reference path="../global.d.ts" />
import angular = require('angular');
import process = require('../process');
import toolbar = require('./toolbar');
import buzz = require('node-buzz');

class MainController {
	

    playing: boolean;

	greeting = 'wasa';
	
	static $inject = ['$scope'];
	constructor($scope){
        $scope['main'] = this;
        //process.getWindow().maximize();
	}
    
    close() {
        window.close();
    }

    minimize() {
        process.getWindow().minimize();
    }

    play() {
        this.playing = !this.playing;
        var file = 'file:///C:/Users/sebas/Music/papercut';

        var s = new (<any>buzz).sound(file, { formats: ['mp3'] });

        s.play();

        //(<any>soundmanager).soundManager.createSound({
        //    id: 'mySound',
        //    url: 'file:///C:/Users/sebas/Music/papercut.mp3',
        //    autoLoad: true,
        //    autoPlay: true,
        //    onload: function() {
        //        console.log('The sound ' + this.id + ' loaded!');
        //    },
        //    volume: 100
        //});

        //var audio = <HTMLAudioElement>document.getElementById('audio');//$("#audio")[0];
        //$("#audio1").attr("src", src);

        //audio.pause();
        //audio.load();//suspends and restores all audio element
        //audio.play();
    }
}

angular.module('app', [])
    .controller('MainController', MainController)
    .directive('toolbar', [toolbar]);