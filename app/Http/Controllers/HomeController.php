<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index(): View
    {
        $dayStart = Carbon::parse('2022-10-10');
        $now = Carbon::now();
        $diffInDays = $this->getDiffInDays($dayStart, $now);
        return view('my_love', compact('dayStart', 'now', 'diffInDays'));
    }

    /**
     * @param  string  $dayStart
     * @param  string  $now
     *
     * @return int
     */
    public function getDiffInDays(string $dayStart, string $now) : int
    {
        $dayStart = Carbon::parse($dayStart);
        $now = Carbon::parse($now);
        return $dayStart->diffInDays($now);
    }
}
