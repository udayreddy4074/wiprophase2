using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

public class FirstController : Controller
{
    public IActionResult Index1()
    {
        ViewData["Message"] = "ViewData Example";
        ViewData["Items"] = new List<string> { "Apple", "Banana", "Cherry" };
        return View();
    }

    public IActionResult Index2()
    {
        ViewBag.Message = "ViewBag Example";
        ViewBag.Items = new List<int> { 10, 20, 30 };
        return View();
    }

    public IActionResult Index3()
    {
        TempData["Message"] = "TempData Example";
        TempData["Items"] = new List<string> { "John", "Doe", "Smith" };
        return View();
    }
}
