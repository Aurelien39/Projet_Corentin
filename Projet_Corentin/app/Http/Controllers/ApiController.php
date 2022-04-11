<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getAllClients() {
        $allClients = Client::all();
        return $allClients->toJson();
    }
}
