<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    // Vue
    public function index()
    {
        return view('welcome');
    }
}
