<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/ef2_custom/templates/page.html.twig */
class __TwigTemplate_3bb636d24441f4733ca37f37f7e2abea004d4b42ef5efe0f96128cfa303fbe92 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 56];
        $filters = ["escape" => 49];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 47
        echo "\t
        
";
        // line 49
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "primary_menu", [])), "html", null, true);
        echo "
";
        // line 50
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "secondary_menu", [])), "html", null, true);
        echo "  

";
        // line 52
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "highlighted", [])), "html", null, true);
        echo "
";
        // line 53
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "help", [])), "html", null, true);
        echo "

<div id=\"page-wrapper\">
  ";
        // line 56
        if ($this->getAttribute(($context["page"] ?? null), "header", [])) {
            // line 57
            echo "    <header id=\"pri-header\"> 
      <div id=\"navbar\">     
        ";
            // line 59
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header", [])), "html", null, true);
            echo "
        <button id=\"menu-toggle\" type=\"button\" aria-label=\"Menu\" aria-controls=\"navigation\">
          <span class=\"bars\"></span>
          <div class=\"text\"><span class=\"open-text\">Menu</span><span class=\"close-text\">Sluiten</span></div>
        </button>
      </div>
    </header>
  ";
        }
        // line 67
        echo "  ";
        if ($this->getAttribute(($context["page"] ?? null), "sec_header", [])) {
            // line 68
            echo "    <header id=\"sec-header\">
      ";
            // line 69
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sec_header", [])), "html", null, true);
            echo "
    </header>
  ";
        }
        // line 72
        echo "  
  <main role=\"main\">
    <a id=\"main-content\" tabindex=\"-1\"></a>";
        // line 75
        echo "
    ";
        // line 76
        if ($this->getAttribute(($context["page"] ?? null), "content", [])) {
            // line 77
            echo "    <div id=\"main-content-container\">
      ";
            // line 78
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
            echo "      
    </div>
    ";
        }
        // line 81
        echo "  </main> 

  <footer> 
      <div id=\"first-row\">
        ";
        // line 85
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer", [])), "html", null, true);
        echo "
      </div>
      <div id=\"second-row\">
        <div class=\"region\">
          <p text-align=\"center\">© 2018 Nedtronics | Enter your digital world | Gebouwd door Jonathan Vandionant</p>
        </div>
      </div>
  </footer>
</div>";
    }

    public function getTemplateName()
    {
        return "themes/ef2_custom/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  131 => 85,  125 => 81,  119 => 78,  116 => 77,  114 => 76,  111 => 75,  107 => 72,  101 => 69,  98 => 68,  95 => 67,  84 => 59,  80 => 57,  78 => 56,  72 => 53,  68 => 52,  63 => 50,  59 => 49,  55 => 47,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/ef2_custom/templates/page.html.twig", "/Users/jonathan/Documents/web/web-websites/nedtronics/httpdocs/themes/ef2_custom/templates/page.html.twig");
    }
}
