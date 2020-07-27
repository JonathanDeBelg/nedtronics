<?php

namespace Drupal\ef2_admin\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Controller routines for page example routes.
 */
class EF2Controller extends ControllerBase {
    
    /**
     * Constructs a admin page with a settings form.
     * Our router maps this method to the path 'admin/vankeulen/settings'.
     */
    public function help() {
        
        
//        // Assemble the markup.
//        $build = array(
//            '#markup' => $this->t('<h3>Ik wil graag dat EF2 me helpt!</h3>'
//                    . '<p>Neem dan contact met ons op:<br />
//                        <br />
//                        <strong>EF2</strong><br />
//                        Kerkewijk 65E (Sigarenfabriek)<br />
//                        3901 EC Veenendaal<br />
//                        0318 - 555 800<br />
//                        <a href="mailto:info@ef2.nl">info@ef2.nl</a><br /></p>', array()
//            )
//        );
//
//        return $build;
        
        $name = "EF2";
        return [
            '#theme' => 'help_page',
            '#name' => $name
        ];
    }
    
    
}
