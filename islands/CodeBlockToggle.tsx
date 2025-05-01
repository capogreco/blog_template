import { useEffect } from "preact/hooks";

export default function CodeBlockToggle() {
  useEffect(() => {
    // Wait for DOM to be fully loaded with rendered markdown
    const addToggleButtons = () => {
      // Find all code blocks
      const codeBlocks = document.querySelectorAll('.markdown-body pre');
      console.log("Found", codeBlocks.length, "code blocks");
      
      if (codeBlocks.length === 0) {
        // Try again in 100ms if no code blocks found yet
        setTimeout(addToggleButtons, 100);
        return;
      }
      
      codeBlocks.forEach((pre) => {
        // Skip if this pre already has a toggle button
        const parentElement = pre.parentNode as HTMLElement;
        if (parentElement?.classList?.contains('code-block-container')) {
          return;
        }
        
        // Create container for pre so we can position the toggle button
        const container = document.createElement('div');
        container.className = 'code-block-container relative';
        
        // Create the toggle button
        const toggleButton = document.createElement('button');
        toggleButton.className = 'ligature-toggle';
        toggleButton.innerHTML = '<span style="font-family: \'Fira Code\', monospace; font-variant-ligatures: normal;">&lt;=&gt;</span>';
        toggleButton.title = 'Toggle code ligatures';
        toggleButton.setAttribute('aria-label', 'Toggle code ligatures');
        
        // Get code element - might be code tag or the pre itself for syntax highlighting
        const codeElement = (pre.querySelector('code') || pre) as HTMLElement;
        
        // Apply monospace font and enable ligatures by default
        codeElement.style.fontFamily = "'Fira Code', monospace";
        codeElement.style.fontVariantLigatures = 'normal';
        
        // Initialize ligatures to 'on'
        let ligaturesOn = true;
        
        // Add click handler
        toggleButton.addEventListener('click', (e) => {
          e.preventDefault();
          ligaturesOn = !ligaturesOn;
          
          // Toggle ligatures on the code element or pre element
          if (ligaturesOn) {
            codeElement.style.fontVariantLigatures = 'normal';
            toggleButton.innerHTML = '<span style="font-family: \'Fira Code\', monospace; font-variant-ligatures: normal;">&lt;=&gt;</span>';
          } else {
            codeElement.style.fontVariantLigatures = 'none';
            toggleButton.innerHTML = '<span style="font-family: \'Fira Code\', monospace; font-variant-ligatures: none;">&lt;=&gt;</span>';
          }
        });
        
        // Replace the pre with our container
        if (parentElement) {
          parentElement.insertBefore(container, pre);
          container.appendChild(pre);
          container.appendChild(toggleButton);
        }
      });
    };

    // Start the process
    setTimeout(addToggleButtons, 100);
  }, []);

  return null; // This component doesn't render anything visible directly
}