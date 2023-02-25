
import html from '../svg/skills/html.svg'
import photoshop from '../svg/skills/photoshop.svg'
import illustrator from '../svg/skills/illustrator.svg'
import express from '../svg/skills/express.svg'
import adobeXd from '../svg/skills/adobe-xd.svg'
import afterEffects from '../svg/skills/after-effects.svg'
import css from '../svg/skills/css.svg'
import angular from '../svg/skills/angular.svg'
import javascript from '../svg/skills/javascript.svg'
import nextJS from '../svg/skills/nextJS.svg'
import nuxtJS from '../svg/skills/nuxtJS.svg'
import react from '../svg/skills/react.svg'
import typescript from '../svg/skills/typescript.svg'
import vue from '../svg/skills/vue.svg'
import bootstrap from '../svg/skills/bootstrap.svg'
import node from '../svg/skills/node.svg'
import capacitorjs from '../svg/skills/capacitorjs.svg'
import coffeescript from '../svg/skills/coffeescript.svg'
import memsql from '../svg/skills/memsql.svg'
import mongoDB from '../svg/skills/mongoDB.svg'
import mysql from '../svg/skills/mysql.svg'
import postgresql from '../svg/skills/postgresql.svg'
import tailwind from '../svg/skills/tailwind.svg'
import vitejs from '../svg/skills/vitejs.svg'
import vuetifyjs from '../svg/skills/vuetifyjs.svg'
import c from '../svg/skills/c.svg'
import cplusplus from '../svg/skills/cplusplus.svg'
import csharp from '../svg/skills/csharp.svg'
import dart from '../svg/skills/dart.svg'
import go from '../svg/skills/go.svg'
import java from '../svg/skills/java.svg'
import julia from '../svg/skills/julia.svg'
import kotlin from '../svg/skills/kotlin.svg'
import matlab from '../svg/skills/matlab.svg'
import php from '../svg/skills/php.svg'
import python from '../svg/skills/python.svg'
import ruby from '../svg/skills/ruby.svg'
import swift from '../svg/skills/swift.svg'
import adobeaudition from '../svg/skills/adobeaudition.svg'
import aws from '../svg/skills/aws.svg'
import deno from '../svg/skills/deno.svg'
import django from '../svg/skills/django.svg'
import firebase from '../svg/skills/firebase.svg'
import gimp from '../svg/skills/gimp.svg'
import git from '../svg/skills/git.svg'
import graphql from '../svg/skills/graphql.svg'
import lightroom from '../svg/skills/lightroom.svg'
import materialui from '../svg/skills/materialui.svg'
import nginx from '../svg/skills/nginx.svg'
import numpy from '../svg/skills/numpy.svg'
import opencv from '../svg/skills/opencv.svg'
import premierepro from '../svg/skills/premierepro.svg'
import pytorch from '../svg/skills/pytorch.svg'
import selenium from '../svg/skills/selenium.svg'
import strapi from '../svg/skills/strapi.svg'
import tensorflow from '../svg/skills/tensorflow.svg'
import webix from '../svg/skills/webix.svg'
import wordpress from '../svg/skills/wordpress.svg'

import azure from '../svg/skills/azure.svg'
import blender from '../svg/skills/blender.svg'
import fastify from '../svg/skills/fastify.svg'
import figma from '../svg/skills/figma.svg'
import flutter from '../svg/skills/flutter.svg'
import haxe from '../svg/skills/haxe.svg'
import ionic from '../svg/skills/ionic.svg'
import markdown from '../svg/skills/markdown.svg'
import microsoftoffice from '../svg/skills/microsoftoffice.svg'
import picsart from '../svg/skills/picsart.svg'
import sketch from '../svg/skills/sketch.svg'
import unity from '../svg/skills/unity.svg'
import wolframalpha from '../svg/skills/wolframalpha.svg'

import canva from '../svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'illustrator':
            return illustrator;
        case 'express':
            return express;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'node':
            return node;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'java':
            return java;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'wordpress':
            return wordpress;
        case 'figma':
            return figma;
        case 'microsoft office':
            return microsoftoffice;
        case 'canva':
            return canva;
        default:
            break;
    }
}
