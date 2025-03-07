using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

public class SecondController : Controller
{
    public IActionResult Index1()
    {
        ViewData["Numbers"] = new List<int> { 1, 2, 3, 4, 5 };
        return View();
    }

    public IActionResult Index2()
    {
        ViewBag.Persons = new List<string> { "Alice", "Bob", "Charlie" };
        return View();
    }

    public IActionResult Index3()
    {
        TempData["Cities"] = new List<string> { "New York", "London", "Paris" };
        return View();
    }
}
