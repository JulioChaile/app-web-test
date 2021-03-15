<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\Cors;
use app\models\GestorModelos;
use app\models\Modelos;

class ModelosController extends Controller
{
    public function behaviors()
    {
        return [
            'corsFilter' => [
                'class' => Cors::className(),
                'cors' => [
                    'Origin' => ['https://juliochaile.github.io', 'http://localhost:3000', 'http://localhost:8080'],
                    'Access-Control-Allow-Credentials' => false,
                    'Access-Control-Request-Method' => ['GET', 'HEAD', 'DELETE', 'POST', 'PATCH', 'OPTIONS', 'PUT'],
                    'Access-Control-Request-Headers' => ['Authorization', 'Content-Type'],
                    'Access-Control-Allow-Headers' => ['Authorization', 'Content-Type']
                ],
            ]
        ];
    }

    public function actionIndex()
    {
        $gestor = new GestorModelos();

        return json_encode($gestor->ListarModelos());
    }

    public function actionVer($id)
    {
        $Modelo = new Modelos();

        $Modelo->IdModelo = $id;

        $Modelo->Dame();

        return json_encode($Modelo);
    }
}