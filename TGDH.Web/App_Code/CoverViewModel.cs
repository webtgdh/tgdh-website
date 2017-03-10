using System.Web;

public class CoverViewModel
{
    public int ImageId { get; set; }

    public string Headline { get; set; }

    public IHtmlString Subtitle { get; set; }

    public IHtmlString Copy { get; set; }

    public string Cta { get; set; }

}