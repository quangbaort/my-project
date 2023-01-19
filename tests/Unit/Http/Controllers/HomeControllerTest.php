<?php

namespace Http\Controllers;

use App\Http\Controllers\HomeController;
use Carbon\Carbon;
use PHPUnit\Framework\TestCase;

class HomeControllerTest extends TestCase
{
    /**
     * @var HomeController|null
     */
    private ?HomeController $homeController;

    public function setUp(): void
    {
        $this->homeController = new HomeController();
    }

    public function testGetDiffInDays(): void
    {
        $dayStart = Carbon::parse('2022-10-10');
        $now = Carbon::now();
        $expected = 100;
        $actual = $this->homeController->getDiffInDays($dayStart, $now);
        $this->assertEquals($expected, $actual);
    }

}
