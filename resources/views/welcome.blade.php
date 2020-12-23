@extends('layouts.app')
@section('content')
    <guest-navbar></guest-navbar>
    <div class="container mx-auto py-4">
        <router-view></router-view>
    </div>
@endsection